import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updownarrow } from '../../assets';
import { setSwipToggle, setToToggle } from '../../feature/token/tokenSlice';
import { showConnectWallet } from '../../feature/wallet/walletSlice';
import ExChangeBtn from '../../layout/ExChangeBtn';
import Settings from './Settings';

const debounce = (cb) => {
    let timeout;
    return (...arg) => {
        if (timeout) return clearTimeout(timeout);
        return setTimeout(() => {
            cb(...arg);
        }, 1000);
    };
};

export default function SwipBox({ flipBtn, setFlipBtn }) {
    const dispatch = useDispatch();
    const { swip, to } = useSelector((state) => state.token);
    const toRef = useRef(null);
    const swipRef = useRef(null);

    const swipToggle = swip.toggle;
    const toToggle = to.toggle;
    const swipBtnData = {
        icon: swip.selected.icon,
        symbol: swip.selected.symbol,
        setToggle: setSwipToggle,
        toggle: swipToggle,
    };
    const toBtnData = {
        icon: to.selected.icon,
        symbol: to.selected.symbol,
        setToggle: setToToggle,
        toggle: toToggle,
    };

    const handleDebounce = debounce((e) => {
        if (!swip.selected && !to.selected) return;
        if (e.target.name === 'swip') {
            toRef.current.value = (e.target.value * swip.selected.price) / to.selected.price;
        } else if (e.target.name === 'to') {
            swipRef.current.value = (e.target.value * to.selected.price) / swip.selected.price;
        }
    });

    return (
        <div className="basis-full mt-8 lg:mt-0">
            <Settings />

            <form className="p-6 sm:px-7 bg-white dark:bg-dark400 rounded-2xl lg:mt-10 mt-8 max-w-[460px] ml-auto">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col basis-3/5 font-semibold text-gray-500 text-sm">
                        Swip
                        <input
                            type="number"
                            className="outline-none text-2xl w-1/2 text-black dark:text-darkText bg-transparent"
                            placeholder="0.0"
                            name="swip"
                            ref={swipRef}
                            onChange={(e) => handleDebounce(e)}
                        />
                    </div>
                    <ExChangeBtn flipBtnData={!flipBtn ? swipBtnData : toBtnData} />
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
                    <div className="flex flex-col basis-3/5  font-semibold text-gray-500 text-sm">
                        To
                        <input
                            type="number"
                            className="outline-none text-2xl w-1/2 text-black dark:text-darkText bg-transparent"
                            placeholder="0.0"
                            name="to"
                            ref={toRef}
                            onChange={(e) => handleDebounce(e)}
                        />
                    </div>
                    <ExChangeBtn flipBtnData={flipBtn ? swipBtnData : toBtnData} />
                </div>
                <button
                    type="button"
                    onClick={() => dispatch(showConnectWallet(true))}
                    className="bg-accent-400 w-[80%] mt-8 mx-[10%] text-white py-2.5 rounded-full"
                >
                    Swap
                </button>
            </form>
        </div>
    );
}
