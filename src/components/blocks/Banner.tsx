const Banner = () => {
    return (
        <>
            <div className="flex justify-center items-center h-[40vh] flex-col">
                <div className='flex items-center content-center px-[2rem] font-bold text-white flex-wrap bg-[url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/qUOJGvH8L31HL2b9Q6DGNPGCCI0.jpg")] h-full w-full bg-cover bg-center'>
                    <div className="text-6xl basis-full">Welcome.</div>
                    <div className="text-2xl">Millions of movies, TV shows and people to discover. Explore now.</div>
                </div>
            </div>
        </>
    )
}

export default Banner;