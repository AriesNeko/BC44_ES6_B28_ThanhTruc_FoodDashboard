export let renderFoodList = (foodArr) => {
  let contentHTML = "";
  foodArr.forEach((item) => {
    let { id, name, type, discount, price, status } = item;
    let contentTr = `<tr>
    <td>${id}</td>
    <td>${name}</td>
    <td>${type ? "chay" : "mặn"}</td>
    <td>${price}</td>
    <td>${discount}</td>
    <td>${item.calculateDiscount()}</td>
    <td>${item.status ? "Còn" : "Hết"}</td>
    <td>
    <button onclick="sua(${id})" class="btn btn-warning">Sửa</button>
    <button onclick="xoa(${id})" class="btn btn-primary">Xóa</button>
    </td>
    </tr>`;
    contentHTML += contentTr;
    document.getElementById("tbodyFood").innerHTML = contentHTML;
  });
};

// Lấy thông tin từ form
export function getInfoFromForm() {
  let id = document.getElementById("foodID").value;
  let name = document.getElementById("tenMon").value;
  let type = document.getElementById("loai").value;
  let price = document.getElementById("giaMon").value * 1;
  let discount = document.getElementById("khuyenMai").value * 1;
  let status = document.getElementById("tinhTrang").value;
  let img = document.getElementById("hinhMon").value;
  let desc = document.getElementById("moTa").value;
  return {
    id,
    name,
    type,
    price,
    discount,
    status,
    img,
    desc,
  };
}
