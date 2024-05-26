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
    "Icon": MdDashboard,
    "link": "/dashboard"
  },
  {
    "name": "Tamu Undangan",
    "Icon": MdPeople,
    "link": "/guests"
  },
  {
    "name": "Kiriman Undangan",
    "Icon": SlEnvolopeLetter,
    "link": "/invitation"
  },
  {
    "name": "Bukti Transfer",
    "Icon": BiTransferAlt,
    "link": "/transfer"
  },
  {
    "name": "Buku Tamu",
    "Icon": FaBook,
    "link": "/guests-book"
  },
  {
    "name": "Reservasi Tamu",
    "Icon": FaClipboardList,
    "link": "/reservation"
  },
  {
    "name": "Pengaturan",
    "Icon": GrConfigure,
    "link": "/setting"
  }
]