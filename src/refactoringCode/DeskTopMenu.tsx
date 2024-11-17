export default function DeskTopMenu({
  menuItems,
  onClickMenu,
}: {
  menuItems: any;
  onClickMenu: any;
}) {
  return (
    <aside className="hidden md:flex w-64 flex-col bg-muted">
      <div className="p-4">
        <h1 className="text-2xl font-bold">마이페이지</h1>
      </div>
      <nav className="flex-1">
        {menuItems.map((item: any) => (
          <button key={item.id} onClick={() => onClickMenu(item.id)}>
            <item.icon className="w-5 h-5 mr-2" />
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
