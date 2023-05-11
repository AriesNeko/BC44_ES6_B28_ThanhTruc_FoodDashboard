export function layThongTinTuForm() {
  let maMon = document.getElementById("foodID").value;
  let tenMon = document.getElementById("tenMon").value;
  let loai = document.getElementById("loai").value;
  let giaMon = document.getElementById("giaMon").value * 1;
  let khuyenMai = document.getElementById("khuyenMai").value * 1;
  let tinhTrang = document.getElementById("tinhTrang").value;
  let hinhMon = document.getElementById("hinhMon").value;
  let moTa = document.getElementById("moTa").value;
  return {
    maMon,
    tenMon,
    loai,
    giaMon,
    khuyenMai,
    tinhTrang,
    hinhMon,
    moTa,
  };
}

export default function showThongTinLenForm(food) {
  document.getElementById("imgMonAn").src = food.hinhMon;
  document.getElementById("spMa").innerHTML = food.maMon;
  document.getElementById("spTenMon").innerHTML = food.tenMon;
  document.getElementById("spLoaiMon").innerHTML =
    food.loai == "loai1" ? "Chay" : "Mặn";
  document.getElementById("spGia").innerHTML = food.giaMon;
  document.getElementById("spKM").innerHTML = food.khuyenMai;
  document.getElementById("spTT").innerHTML =
    food.tinhTrang == "0" ? "Hết" : "Còn";
  document.getElementById("pMoTa").innerHTML = food.moTa;
}
