import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Link } from 'react-router-dom'



const CustomQuoteBox = () => {
    return (
        <div>
            <div className=" bg-primary-foreground p-6 md:p-8 lg:p-12 rounded-lg transition-all duration-300 hover:-translate-y-2 min-h-[6rem] w-full max-w-[800px] border border-transparent shadow-xl mx-auto mt-10 md:mt-20">
                <h2 className="text-center text-xl md:text-3xl lg:text-4xl font-normal text-dark mb-3">Need Something More Custom?</h2>
                <p className="text-center">No problem. If your project has unique requirements or you’re not sure which package is the best fit, we’ll create a tailored solution just for you.</p>
                <p className="text-center">Tell us what you need, and we’ll send a personalized quote.</p>
                <div className="text-center mt-5">

                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="btn-primary">Get a Custom Quote</button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[800px] lg:p-10">
                            <DialogHeader>
                                <DialogTitle className="text-2xl md:text-2xl font-medium text-dark">Get My Custom Quote</DialogTitle>
                            </DialogHeader>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 py-4">
                                <div>
                                    <label htmlFor="fullName" className="block mb-2 text-sm md:text-base font-semibold text-[#22333B]">Full Name</label>
                                    <input
                                        type="text"
                                        id='fullName'
                                        className='w-full h-12 border border-[#091906] px-4 py-2 rounded-md'
                                    />
                                </div>
                                <div>
                                    <label htmlFor="emailAddress" className="block mb-2 text-sm md:text-base font-semibold text-[#22333B]">Email Address</label>
                                    <input
                                        type="text"
                                        id='emailAddress'
                                        className='w-full h-12 border border-[#091906] px-4 py-2 rounded-md'
                                    />
                                </div>
                                <div className='md:col-span-2'>
                                    <label htmlFor="emailAddress" className="block mb-2 text-sm md:text-base font-semibold text-[#22333B]">Brief Project Description</label>
                                    <textarea
                                        rows={4} cols={50}
                                        id='emailAddress'
                                        className='w-full h-auto border border-[#091906] px-4 py-2 rounded-md'
                                    />
                                </div>
                                <div>
                                    <label htmlFor="emailAddress" className="block mb-2 text-sm md:text-base font-semibold text-[#22333B]">Estimated Budget</label>
                                    <Select>
                                        <SelectTrigger className="w-full h-12 border border-[#091906] px-4 md:px-5 py-2 rounded-md text-dark placeholder:text-dark">
                                            <SelectValue placeholder="Theme" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Under $1,000">Under $1,000</SelectItem>
                                            <SelectItem value="$1,000 – $2,500">$1,000 – $2,500</SelectItem>
                                            <SelectItem value="$2,500 – $5,000">$2,500 – $5,000</SelectItem>
                                            <SelectItem value="$5,000 – $10,000">$5,000 – $10,000</SelectItem>
                                            <SelectItem value="$10,000 – $25,000">$10,000 – $25,000</SelectItem>
                                            <SelectItem value="Over $25,000">Over $25,000</SelectItem>
                                        </SelectContent>
                                    </Select>

                                </div>
                                <div>
                                    <label htmlFor="emailAddress" className="block mb-2 text-sm md:text-base font-semibold text-[#22333B]">Preferred Start Time</label>
                                    <Select>
                                        <SelectTrigger className="w-full h-12 border border-[#091906] px-4 md:px-5 py-2 rounded-md text-dark placeholder:text-dark">
                                            <SelectValue placeholder="Theme" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ASAP (Ready to start immediately)">ASAP (Ready to start immediately)</SelectItem>
                                            <SelectItem value="In 2–4 weeks">In 2–4 weeks</SelectItem>
                                            <SelectItem value="In 1–2 months">In 1–2 months</SelectItem>
                                            <SelectItem value="In 2–3 months">In 2–3 months</SelectItem>
                                            <SelectItem value="3+ months">3+ months</SelectItem>
                                            <SelectItem value="Not sure / Need guidance">Not sure / Need guidance</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className='md:col-span-2 pt-4'>
                                    {/* <button className="btn-primary w-full rounded-full">Submit & Get My Quote</button> */}
                                    <Link to={"/thank-you"} className="btn-primary w-full rounded-full block text-center">Submit & Get My Quote</Link>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

export default CustomQuoteBox