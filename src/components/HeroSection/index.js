import React from 'react'
import first from '../../images/first.svg'
import second from '../../images/second.svg'
import third from '../../images/third.svg'
import fourth from '../../images/fourth.svg'
import fifth from '../../images/fifth.svg'
import sixth from '../../images/sixth.svg'
import heart from '../../images/Heart.svg'
import add from '../../images/add.svg'
import rating from '../../images/Rating.svg'

function Index() {
    const Items = [
        {
            title: "DJI Phantom 2 Vision+",
            price: "$599",
            image: first,
            rate: "177"
        },
        {
            title: "DJI Phantom 4 Multispectral",
            price: "$1,449",
            image: second,
            rate: "98"
        },
        {
            title: "DJI Phantom 4 PRO",
            price: "$739",
            image: third,
            rate: "1,002"
        },
        {
            title: "DJI Phantom 4 Multispectral",
            price: "$1,449",
            image: fourth,
            rate: "98"
        },
        {
            title: "DJI Phantom 4 PRO",
            price: "$739",
            image: fifth,
            rate: "1,002"
        },
        {
            title: "DJI Phantom 4 PRO",
            price: "$739",
            image: sixth,
            rate: "1,002"
        }
    ]
    return (
        <>
            <div style={{ display: "grid", gridTemplateRows: "auto", gridTemplateColumns: "1fr 1fr 1fr" }}>

                {
                    Items.map((item) => (
                        <div style={{ padding: "8px 8px", position: "relative", border: "1px solid #E5E9EB" }}>
                            <div style={{ display: "flex", flexDirection: "column", width: "24px", height: "24px", position: "absolute", right: 2, top: 0 }}>
                                <img src={heart} alt="like" />
                                <img src={add} alt="add" />
                            </div>
                            <img src={item.image} alt="icon" style={{ margin: "10px 10px" }} />
                            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                <span style={{ display: "flex", fontSize: 14 }} >{item.title}</span>
                                <span style={{ display: "flex", fontSize: 18 }}>{item.price}</span>
                                <div style={{ display: "flex", gap: 8 }}>
                                    <img src={rating} alt="rating" width={80} />
                                    <span style={{ fontSize: "12px", color: "#5B6871" }}>{item.rate}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Index;