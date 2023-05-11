import { Food2 } from "../../models/v2/model2.js";
import { renderFoodList, getInfoFromForm } from "./controller-2.js";

const BASE_URL = "https://64561e0f2e41ccf169141804.mockapi.io/food";

let fetchFoodList = () => {
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then((res) => {
      let footArr = res.data.map((item) => {
        // destructuring
        let { name, type, discount, img, desc, price, status, id } = item;
        // new object
        let food = new Food2(
          id,
          name,
          type,
          discount,
          img,
          status,
          price,
          desc
        );
        return food;
      });
      renderFoodList(footArr);
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
      $("#exampleModal").modal("hide");
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
let capNhat = (id) => {
  axios({
    url: `${BASE_URL}/${id}`,
    method: "PUT",
  })
    .then((res) => {
      let footArr = res.data.map((item) => {
        return item.id == res.id;
      });
      $("#exampleModal").modal("hide");
      renderFoodList(footArr);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};
window.capNhat = capNhat;
