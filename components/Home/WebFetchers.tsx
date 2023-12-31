import React from "react";
import { baseUrl } from '@/config/appConfig';

const WebFetchers = () => {
    return (
        <div className="container">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* col 1 */}
                <div className="col flex items-center px-10 py-5 space-x-5 border bg-primary-500   shadow-xl border-accentOne">
                    <div>
                        <i className="fa-solid fa-truck text-3xl text-accentOne" />
                    </div>
                    <div>
                        <h3 className="font-bold text-sm text-primary ">Free Shipping</h3>
                        <p>Order over $200</p>
                    </div>
                </div>
                {/* col 2 */}
                <div className="col flex items-center px-10 py-5 space-x-5 border  bg-zinc-400 shadow-xl border-accentOne">
                    <div>
                        <i className="fa-solid fa-hand-holding-dollar text-3xl text-accentOne" />
                    </div>
                    <div>
                        <h3 className="font-bold text-sm">Money Return</h3>
                        <p>30 days money return</p>
                    </div>
                </div>
                {/* col 3 */}
                <div className="col flex items-center px-10 py-5 space-x-5 bg-yellow-400 shadow-xl border border-accentOne">
                    <div>
                        <i className="fa-solid fa-headset text-3xl text-accentOne" />
                    </div>
                    <div>
                        <h3 className="font-bold text-sm">24/7 Support</h3>
                        <p>Customer support</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebFetchers;