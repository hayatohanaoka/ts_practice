export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="header">Next App</h1>
      <main>{children}</main>
      <hr className="footer" />
      <p className="footer">copyright 2023</p>
    </>
  );
}