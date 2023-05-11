import hienThiThongTin, { layThongTinTuForm } from "./controller-1.js";
import { Food } from "../../models/v1/model.js";

function themMon() {
  let data = layThongTinTuForm();
  let { maMon, tenMon, loai, giaMon, khuyenMai, tinhTrang, hinhMon, moTa } =
    data;
  let food = new Food(
    maMon,
    tenMon,
    loai,
    giaMon,
    khuyenMai,
    tinhTrang,
    hinhMon,
    moTa
  );
  hienThiThongTin(food);
}

window.themMon = themMon;
