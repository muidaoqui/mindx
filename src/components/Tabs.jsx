const Tabs = ({ currentTab, setTab }) => {
  const tabs = ["All", "Active", "Completed"];
  return (
    <div className="flex justify-center gap-4 mb-4 border-b">
      {tabs.map(t => (
        <button
          key={t}
          className={`py-2 px-4 border-b-2 ${currentTab === t ? "border-blue-500 text-blue-500" : "border-transparent"}`}
          onClick={() => setTab(t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
