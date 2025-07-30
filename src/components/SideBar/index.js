import React from "react"

function Index() {
    const Options = [
        {
            title: "Quadcopter Features",
            child: [
                "App-Controlled",
                "Obstacle Avoidance",
                "Video Downlink Capable",
                "Wi-Fi"
            ]
        },
        {
            title: "Video Capture Resolution",
            child: [
                "App-4K UHD 2160p",
                "FHD 1080p",
                "HD 720p",
            ]
        },
        {
            title: "Operator Skill Level",
            child: [
                "Beginner",
                "Intermediate",
                "Expert",
            ]
        },
        {
            title: "Brand",
            child: [
                "DJI",
                "Holy Stone",
                "Potensic",
                "Ruko",
                "aovo",
                "OXOXO",
                "DEERC"
            ]
        }
    ]
    return (
        <div style={{ display: "flex", flexDirection: "column" ,paddingLeft: "80px", paddingRight: "80px", width: "280px" }}>
            <p style={{ display: "flex", fontSize: 14, fontWeight: 600 }}>Price, $</p>
            <div style={{ display: "flex", gap: "12px" }}>
                <input style={{ border: "1px solid #DDE2E4", width: "132px", padding: "8px 12px", borderRadius: "6px", fontSize: "14px" }} placeholder="Min" />
                <input style={{ border: "1px solid #DDE2E4", width: "132px", padding: "8px 12px", borderRadius: "6px", fontSize: "14px" }} placeholder="Max" />
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                {
                    Options.map((option) => (
                        <div >
                            <span style={{display:"flex",fontSize:14,fontWeight: 600 ,marginBottom:6 , marginTop:20}}>{option.title}</span>

                            {
                                option.child.map((item) => (
                                    <div style={{display: "flex",gap:8, marginBottom:4}}>
                                        <input type="checkBox" />
                                        <span style={{fontSize :14}}>{item}</span>
                                    </div>
                                ))
                            }

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Index;