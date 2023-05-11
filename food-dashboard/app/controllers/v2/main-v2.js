import { renderFoodList, getInfoFromForm } from "./controller-2.js";

const BASE_URL = "https://64561e0f2e41ccf169141804.mockapi.io/food";

let fetchFoodList = () => {
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then((res) => {
      $("#exampleModal").modal("hide");
      renderFoodList(res.data);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

// Xóa Món Ăn
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

// Thêm Món Ăn
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
  console.log(id);
  let data = getInfoFromForm();

  await axios({
    url: `${BASE_URL}/${id}`,
    method: "PUT",
    data: data,
  });

  fetchFoodList();

  // gửi yêu cầu cập nhật lên sever
  // axios({
  //   url: `${BASE_URL}/${id}`,
  //   method: "PUT",
  //   data: data,
  // })
  //   .then((res) => {
  //     // gửi yêu cầu lấy tất cả data ở sever
  //     fetchFoodList();
  //   })
  //   .catch((err) => {
  //     console.log("err: ", err);
  //   });
};
window.capNhat = capNhat;
