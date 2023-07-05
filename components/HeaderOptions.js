import HeaderOption from "./HeaderOption"

function HeaderOptions(){
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
            <div className="flex space-x-6">
                <HeaderOption icon="A" title="All" selected />
                <HeaderOption icon="I" title="Images" />
                <HeaderOption icon="V"title="Videos"  />
                <HeaderOption icon="N" title="News" />
                <HeaderOption icon="M" title="Maps"  />
            </div>

            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions