import {Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild} from "@headlessui/react";

const Rule = ({onClose}:{onClose:()=>void}): JSX.Element => {
  
    return (
        <>
            <Transition appear show={true}>
                <Dialog as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50 backdrop-blur-sm">
                        <div className="flex min-h-full items-center justify-center">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel
                                    style={{
                                        boxShadow: '0px 50px 100px -20px rgba(3,35,37,0.25), 0px 30px 60px -30px rgba(0,0,0,0.3)'
                                    }}
                                    className="w-[700px] rounded-xl bg-white px-6 py-4 backdrop-blur-2xl flex flex-col items-center">

                                    <div className="mt-4">
                                        <Button
                                            className="inline-flex items-center gap-2 px-3 text-sm/6 font-semibold text-black focus:outline-none absolute left-4"
                                            onClick={onClose}
                                        >
                                            &#x2715;
                                        </Button>
                                    </div>

                                    <DialogTitle as="h3" className="text-3xl font-bold text-black mb-2">
                                        قوانین و مقررات
                                    </DialogTitle>
                                    <p className="my-6 text-sm text-black text-right">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                        طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                                        لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                                        ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
                                        شناخت فراوان جامعه و متخصصان را می طلبد. <br/>
                                        <ul className="list-disc pr-6">
                                            <li>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
                                                از
                                                طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                سطرآنچنان که
                                                لازم است،
                                            </li>
                                            <li>
                                                و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                                                ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                                                آینده،
                                            </li>
                                            <li>
                                                شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                                                را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
                                                فارسی ایجاد کرد،
                                            </li>
                                            <li>
                                                در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،
                                                و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                                                اصلی، و
                                            </li>
                                            <li>
                                                جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                                                گیرد.
                                            </li>
                                        </ul>
                                    </p>

                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
};

export default Rule;