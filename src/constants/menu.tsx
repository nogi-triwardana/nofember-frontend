/** @jsxImportSource theme-ui */
import { 
  MdDashboard,
  MdPeople,

} from "react-icons/md";
import { SlEnvolopeLetter } from "react-icons/sl";
import { BiTransferAlt } from "react-icons/bi";
import { FaBook, FaClipboardList } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";

export const Menus = [
  {
    "name": "Dashboard",
    "Icon": MdDashboard
  },
  {
    "name": "Tamu Undangan",
    "Icon": MdPeople
  },
  {
    "name": "Kiriman Undangan",
    "Icon": SlEnvolopeLetter
  },
  {
    "name": "Bukti Transfer",
    "Icon": BiTransferAlt
  },
  {
    "name": "Buku Tamu",
    "Icon": FaBook
  },
  {
    "name": "Reservasi Tamu",
    "Icon": FaClipboardList
  },
  {
    "name": "Pengaturan",
    "Icon": GrConfigure
  }
]