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
    title: 'מכבי חיפה - מכבי נתניה',
    date: new Date(2024, 0, 21, 20, 30, 0),
    areas: [
                
                {
                    "date": "19.1.2024 17:55:18",
                    "values": "[{\"id\":0,\"guid\":\"6d7186a9-231b-44d0-b117-ec98fd1cd8dd\",\"name\":\"129\",\"type\":\"ReservedSeating\",\"capacity\":313,\"free\":169,\"coords\":\"424,283,470,283,470,303,424,303,424,283\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#00ff99\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":75}},\"middle\":{\"x\":447,\"y\":293},\"priceLevelsAvailability\":{\"44d385e7-c979-4136-8825-78267de05c79\":169}},{\"id\":0,\"guid\":\"4a40558f-8403-49c0-a2d8-52a677c60693\",\"name\":\"130\",\"type\":\"ReservedSeating\",\"capacity\":485,\"free\":91,\"coords\":\"424,305,470,305,470,331,465,342,425,323,424,305\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#00ff99\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":75}},\"middle\":{\"x\":449.6357421875,\"y\":319.438598632813},\"priceLevelsAvailability\":{\"44d385e7-c979-4136-8825-78267de05c79\":91,\"569d1f93-515a-44be-8e9e-b35adc72196a\":0}},{\"id\":0,\"guid\":\"3258f46c-039d-492b-8681-64a7781857b9\",\"name\":\"235\",\"type\":\"ReservedSeating\",\"capacity\":225,\"free\":185,\"coords\":\"472,283,509,283,509,303,472,303,472,283\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#00ff99\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":75}},\"middle\":{\"x\":490.5,\"y\":293},\"priceLevelsAvailability\":{\"44d385e7-c979-4136-8825-78267de05c79\":185}},{\"id\":0,\"guid\":\"7cfb0de0-0c5a-4b13-82b5-01a43a64e9d9\",\"name\":\"236\",\"type\":\"ReservedSeating\",\"capacity\":354,\"free\":246,\"coords\":\"472,305,510,305,509,343,470,336,472,331,472,305\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#00ff99\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":75}},\"middle\":{\"x\":491.274688720703,\"y\":322.373474121094},\"priceLevelsAvailability\":{\"44d385e7-c979-4136-8825-78267de05c79\":246}}]"
                }
    ],
    bg: {
        mobile: "https://leaan.seatgeekenterprise.com/weblink/1159/get.resource/images/1033/1007283.jpg?etag=C27A6720720D40F0E9159A2D0B40D82E",
        desktop: "https://leaan.seatgeekenterprise.com/weblink/1159/get.resource/images/1037/1007281.jpg?etag=C0278E6E9A22F007487821C790DD7635"
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
    link: 'https://www.leaan.co.il/events/%D7%9E%D7%9B%D7%91%D7%99%20%D7%97%D7%99%D7%A4%D7%94%20-%20%D7%9E%D7%9B%D7%91%D7%99%20%D7%A0%D7%AA%D7%A0%D7%99%D7%94/2024-1-21_20.30/%D7%90%D7%A6%D7%98%D7%93%D7%99%D7%95%D7%9F%20%D7%A1%D7%9E%D7%99%20%D7%A2%D7%95%D7%A4%D7%A8%20-%20%D7%97%D7%99%D7%A4%D7%94?hallmap',
    closedGates: []
}