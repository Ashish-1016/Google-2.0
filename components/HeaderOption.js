function HeaderOption({icon,title, selected}){
    return (
        <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ${selected && 'text-blue-500 border-blue-500'} `}>
            <p className="">{icon}</p>
            <p className="hidden sm:inline-flex text-gray-500">{title}</p>
        </div>
    )
}
export default HeaderOption