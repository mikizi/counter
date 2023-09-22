var gatesCapacity = {
    east: {
        g_501: 211,
        g_502: 388,
        g_503: 327,
        g_504: 388,
        g_505: 388,
        g_506: 388,
        g_601: 222,
        g_602: 347,
        g_603: 445,
        g_604: 503,
        g_605: 480,
        g_606: 501,
        g_607: 443,

    },
    west: {
        "g_101": 202,
        "g_102": 389,
        "g_103": 326,
        "g_104": 118,
        "g_106": 117,
        "g_107": 324,
        "g_108": 389,
        "g_109": 203,
        "g_201": 220,
        "g_202": 331,
        "g_203": 439,
        "g_204": 462,
        "g_205": 200,
        "g_206": 459,
        "g_207": 439,
        "g_208": 332,
        "g_209": 222,
        "g_105_C": 325,
        "g_105_L": 239,
        "g_105_R": 241
    }
};

var data = {
    title: 'הפועל ירושלים - מכבי נתניה',
    date: new Date(2023, 8, 23, 19, 45, 0),
    areas: [
        {
            "date": "22.9.2023 17:04:46",
            "values": "[{\"id\":0,\"guid\":\"5077ef38-1e28-4678-9cc0-ecbcf30f42f7\",\"name\":\" 1\",\"type\":\"ReservedSeating\",\"capacity\":1924,\"free\":697,\"coords\":\"566,225,635,225,636,260,567,260,566,225\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5cdaafdd-29e3-4b57-b062-9e5dd102279f\",\"name\":\"טדי, י-ם\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":75}},\"middle\":{\"x\":601.000122070313,\"y\":242.5},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":697}}]"
        }
    ],
    bg: {
        mobile: "https://leaan.seatgeekenterprise.com/weblink/1159/get.resource/images/1033/1012047.jpg?etag=290F18BBCF149ABF32191FA4D4054A1F",
        desktop: "https://leaan.seatgeekenterprise.com/weblink/1159/get.resource/images/1037/1012045.jpg?etag=F89AC8BDFB82E2A27FDFFB1449222FEC"
    },
    header: {
        style: {
            mobile: {
                height: '230px',
                backgroundPositionY: 'bottom'
            },
            desktop: {
                height: '380px',
                backgroundColor: '#010309',
                backgroundPosition: 'right top'
            }
        }
    },
    base: {
        capacity: 0, //gatesCapacity.west.g_206 + gatesCapacity.west.g_206 ,
        free: 0,
        taken: 0
    },
    link: "https://www.leaan.co.il/he-IL/events/%D7%94%D7%A4%D7%95%D7%A2%D7%9C%20%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D%20-%20%D7%9E%D7%9B%D7%91%D7%99%20%D7%A0%D7%AA%D7%A0%D7%99%D7%94/2023-9-23_19.45/%D7%98%D7%93%D7%99,%20%D7%99-%D7%9D?hallmap",
    closedGates: []
}