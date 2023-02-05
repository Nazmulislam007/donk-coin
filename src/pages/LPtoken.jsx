import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import IosShareIcon from '@mui/icons-material/IosShare';
import { useNavigate } from 'react-router-dom';
import { etherium, terra } from '../assets';
import AddRemoveLiquidity from '../components/LPtoken/AddRemoveLiquidity';
import Overview from '../components/LPtoken/Overview';

export default function LPtoken() {
    const navigate = useNavigate();

    return (
        <div className="bg-primary-100 dark:bg-dark500 pt-3 pb-4">
            <section className="max-w-6xl w-[90%] mx-auto">
                <header className="pb-14">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="fic gap-1 font-semibold px-2 py-2 mb-4 text-primary-contrast-100 dark:text-dark900"
                    >
                        <ArrowBackOutlinedIcon fontSize="10px" />
                        Back to pool list
                    </button>
                    <div className="flex items-center gap-1">
                        <img src={terra} alt="terra" className="w-8 sm:w-10" />
                        <span className="font-semibold text-2xl dark:text-darkText">TERRA</span>
                        <span>/</span>
                        <img src={etherium} alt="etherium" className="w-8 sm:w-10" />
                        <span className="font-semibold text-2xl dark:text-darkText">ETHERIUM</span>
                    </div>
                    <p className="text-xs mt-2 ml-1 text-primary-contrast-100 dark:text-dark900">
                        <a
                            target="_blank"
                            href="https://snowtrace.io/address/0xf4003f4efbe8691b60249e6afbd307abe7758adb"
                            rel="noreferrer"
                        >
                            visit for details
                        </a>
                        <IosShareIcon
                            style={{ fontSize: '14px', marginLeft: '5px', marginTop: '-5px' }}
                        />
                    </p>
                </header>

                <main className="flex max-lg:flex-col gap-10">
                    <Overview />
                    <AddRemoveLiquidity />
                </main>
            </section>
        </div>
    );
}
