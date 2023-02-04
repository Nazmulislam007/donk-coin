import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updownarrow } from '../../assets';
import { setSwipToggle, setToToggle } from '../../feature/token/tokenSlice';
import { showConnectWallet } from '../../feature/wallet/walletSlice';
import ExChangeBtn from './ExChangeBtn';
import Settings from './Settings';

export default function SwipBox({ flipBtn, setFlipBtn }) {
    const dispatch = useDispatch();
    const { swip, to } = useSelector((state) => state.token);
    const swipToggle = swip.toggle;
    const toToggle = to.toggle;

    return (
        <div className="basis-full mt-8 lg:mt-0">
            <Settings />

            <form className="p-8 sm:px-12 bg-white dark:bg-dark400 rounded-2xl lg:mt-16 mt-8 max-w-lg ml-auto">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col font-semibold text-gray-500 text-xl">
                        Swip
                        <span>0.0</span>
                    </div>
                    {flipBtn ? (
                        <ExChangeBtn
                            img={to.selected.icon}
                            name={to.selected.name}
                            setToggle={setSwipToggle}
                            toggle={swipToggle}
                        />
                    ) : (
                        <ExChangeBtn
                            img={swip.selected.icon}
                            name={swip.selected.name}
                            setToggle={setSwipToggle}
                            toggle={swipToggle}
                        />
                    )}
                </div>
                <div className="w-full relative h-[1px] bg-black dark:bg-white my-12">
                    <button
                        type="button"
                        onClick={() => setFlipBtn(!flipBtn)}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"
                    >
                        <img src={updownarrow} alt="arrow" />
                    </button>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col font-semibold text-gray-500 text-xl">
                        To
                        <span>0.0</span>
                    </div>
                    {!flipBtn ? (
                        <ExChangeBtn
                            img={to.selected.icon}
                            name={to.selected.name}
                            setToggle={setToToggle}
                            toggle={toToggle}
                        />
                    ) : (
                        <ExChangeBtn
                            img={swip.selected.icon}
                            name={swip.selected.name}
                            setToggle={setToToggle}
                            toggle={toToggle}
                        />
                    )}
                </div>
                <button
                    type="button"
                    onClick={() => dispatch(showConnectWallet(true))}
                    className="bg-orange500 w-[80%] mt-8 mx-[10%] text-white py-2.5 rounded-full"
                >
                    Swap
                </button>
            </form>
        </div>
    );
}
