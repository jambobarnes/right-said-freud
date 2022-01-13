export default function Body() {
    return (
        <div className="relative bg-white py-16 sm:py-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                <div className="relative sm:py-16 lg:py-0">
                    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none">
                        <div className="relative rounded-2xl shadow-xl overflow-hidden">
                            <img
                                className="inset-0 h-full w-full object-cover"
                                src="rsf.png"
                                alt="Right Said Freud Album Artwork"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                    <div className="pt-12 sm:pt-16 lg:pt-20">
                        <h2 className="flex justify-center sm:block text-3xl text-gray-900 font-extrabold tracking-tight sm:text-5xl mb-2">
                            <span className="bg-freud-orange text-black py-0 px-2 mr-2">LISTEN NOW</span> <span className="text-black">EPISODE 1</span>
                        </h2>
                        <h2 className="flex justify-center sm:block text-6xl text-gray-900 font-extrabold tracking-tight sm:text-8xl mb-6">
                            Free Assocation
                        </h2>
                        <div className="mb-9 flex justify-center sm:block ">
                            
                                <audio
                                    controls
                                    src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3">
                                    Your browser does not support the
                                    <code>audio</code> element.
                                </audio>
                            
                        </div>
                        <div className="text-gray-500 font-arimo text-lg px-8 sm:pl-0 sm:pr-12">
                            <p>
                                Join Annmarie Clarke, Keith Lewis and James Barnes as they discuss the Freudian concept of free association,
                                an idea which Freud claimed gave people in therapy the complete freedom to examine their thoughts, with the
                                freedom coming, in part, from a lack of prompting or intervention by a therapist.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
