// 1. Perbaikan Hero Image
// File aslimu di folder public adalah "hero-img.png", bukan .webp di assets
export const DataImage = {
  HeroImage: "assets/hero-img.png",
};

export default DataImage;

// 2. Perbaikan Import Tools
// Karena gambar tools ada di folder "public/assets/tools/", 
// di Vite kita cukup memanggilnya sebagai string (teks)
export const listTools = [
  { id: 1, gambar: "/assets/tools/vscode.png", nama: "Visual Studio Code", ket: "Code Editor", dad: "100" },
  { id: 2, gambar: "/assets/tools/reactjs.png", nama: "React JS", ket: "Framework", dad: "200" },
  { id: 3, gambar: "/assets/tools/nextjs.png", nama: "Next JS", ket: "Framework", dad: "300" },
  { id: 4, gambar: "/assets/tools/tailwind.png", nama: "Tailwind CSS", ket: "Framework", dad: "400" },
  { id: 5, gambar: "/assets/tools/bootstrap.png", nama: "Bootstrap", ket: "Framework", dad: "500" },
  { id: 6, gambar: "/assets/tools/js.png", nama: "Javascript", ket: "Language", dad: "600" },
  { id: 7, gambar: "/assets/tools/nodejs.png", nama: "Node JS", ket: "Javascript Runtime", dad: "700" },
  { id: 8, gambar: "/assets/tools/github.png", nama: "Github", ket: "Repository", dad: "800" },
  { id: 9, gambar: "/assets/tools/ai.png", nama: "Adobe Illustrator", ket: "Design App", dad: "900" },
  { id: 10, gambar: "/assets/tools/canva.png", nama: "Canva", ket: "Design App", dad: "1000" },
  { id: 11, gambar: "/assets/tools/figma.png", nama: "Figma", ket: "Design App", dad: "1100" },
];

// 3. Perbaikan Import Proyek
// Pastikan file di folder "public/assets/proyek/" ekstensinya benar (.png atau .jpg)
// Jika di folder aslinya .png, ganti .webp di bawah jadi .png
export const listProyek = [
  { id: 1, gambar: "/assets/proyek/proyek1.webp", nama: "Website Sekolah", desk: "Deskripsi singkat project.", tools: ["HTML", "CSS", "Javascript", "AOS"], dad: "200" },
  { id: 2, gambar: "/assets/proyek/proyek2.webp", nama: "Company Profile", desk: "Deskripsi singkat project.", tools: ["HTML", "CSS", "Javascript", "AOS", "Swiper"], dad: "300" },
  { id: 3, gambar: "/assets/proyek/proyek3.webp", nama: "Web Pernikahan 2.0", desk: "Deskripsi singkat project.", tools: ["Vite", "ReactJS", "TailwindCSS"], dad: "400" },
  { id: 4, gambar: "/assets/proyek/proyek4.webp", nama: "Website Course", desk: "Deskripsi singkat project.", tools: ["Vite", "ReactJS", "Bootstrap"], dad: "500" },
  { id: 5, gambar: "/assets/proyek/proyek5.webp", nama: "Web Portfolio", desk: "Deskripsi singkat project.", tools: ["HTML", "CSS", "Javascript"], dad: "600" },
  { id: 6, gambar: "/assets/proyek/proyek6.webp", nama: "Company Profile 2.0", desk: "Deskripsi singkat project.", tools: ["NextJS", "TailwindCSS"], dad: "700" },
];