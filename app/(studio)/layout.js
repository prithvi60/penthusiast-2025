import "../globals.css";

export default function StudioLayout({ children }) {
  return (
    <div>
      <main className={`!cursor-default`}>{children}</main>
    </div>
  );
}
