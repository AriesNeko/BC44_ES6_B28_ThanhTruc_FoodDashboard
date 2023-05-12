import { renderFoodList, getInfoFromForm } from "./controller-2.js";

const BASE_URL = "https://64561e0f2e41ccf169141804.mockapi.io/food";
let arrData = [];

let fetchFoodList = () => {
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then((res) => {
      $("#exampleModal").modal("hide");
      arrData = res.data;
      console.log(arrData);
      renderFoodList(arrData);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

// Delete
let xoa = (id) => {
  axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  })
    .then((res) => {
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
};
window.xoa = xoa;

fetchFoodList();

// Add
window.themMon = () => {
  let data = getInfoFromForm();
  console.log("data: ", data);
  axios({
    url: BASE_URL,
    method: "POST",
    data: data,
  })
    .then((res) => {
      console.log("res: ", res);
      fetchFoodList();
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

// Edit
window.sua = (id) => {
  axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  })
    .then((res) => {
      // lấy thành công -> show modal
      $("#exampleModal").modal("show");
      //   show data lên form
      let { id, name, type, price, img, discount, desc, status } = res.data;
      document.getElementById("foodID").value = id;
      document.getElementById("tenMon").value = name;
      document.getElementById("loai").value = type ? "loai1" : "loai2";
      document.getElementById("giaMon").value = price;
      document.getElementById("khuyenMai").value = discount;
      document.getElementById("tinhTrang").value = status ? "1" : "0";
      document.getElementById("hinhMon").value = img;
      document.getElementById("moTa").value = desc;
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

// Update
let capNhat = async () => {
  const id = document.querySelector("#foodID").value;
  let data = getInfoFromForm();

  await axios({
    url: `${BASE_URL}/${id}`,
    method: "PUT",
    data: data,
  });

  fetchFoodList();
};
window.capNhat = capNhat;

// Xử lý filter Loại món ăn
document.querySelector("#selLoai").addEventListener("change", function (event) {
  // console.log(event);
  const value = event.target.value;

  if (value === "all" || value === "Chọn loại") {
    renderFoodList(arrData);
    return;
  }

  const result = arrData.filter(function (item) {
    if (item.type === value) {
      return true;
    }
  });

  renderFoodList(result);
});

// search tên món ăn
document
  .querySelector("#input_search")
  .addEventListener("keydown", async (event) => {
    // console.log(event);
    if (event.key === "Enter") {
      const value = document.querySelector("#input_search").value;
      // console.log(value);
      const result = await searchByName(value);
      // console.log(result);
      renderFoodList(result.data);
    }
  });

function searchByName(name) {
  return axios.get(BASE_URL, {
    params: {
      name: name,
    },
  });
}
