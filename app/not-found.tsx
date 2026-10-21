import { redirect } from "next/navigation";

export default function NotFound() {
  // Redirige cualquier enlace no encontrado a la raíz de tu dominio ("/")
  redirect("/");
}