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
    title: 'הפועל חדרה - מכבי נתניה',
    date: new Date(2022, 10, 5, 17, 30, 0),
    areas: [
        {
            "date": "31.10.2022 8:47:41",
            "values": "[{\"id\":0,\"guid\":\"5189ab35-f02c-4760-9ee1-a8285d76433d\",\"name\":\"504\",\"type\":\"ReservedSeating\",\"capacity\":388,\"free\":381,\"coords\":\"272,377,305,377,305,399,272,399,272,377\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"green\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":288.5,\"y\":388},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":381}},{\"id\":0,\"guid\":\"7567dab6-84e6-4ced-a928-6e0c39f576bd\",\"name\":\"505\",\"type\":\"ReservedSeating\",\"capacity\":388,\"free\":240,\"coords\":\"233,378,265,378,265,399,233,399,233,378\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":249,\"y\":388.5},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":240}},{\"id\":0,\"guid\":\"9c523abd-72d1-40e0-abce-33ec2b25dc80\",\"name\":\"506\",\"type\":\"ReservedSeating\",\"capacity\":388,\"free\":385,\"coords\":\"196,378,227,378,227,399,196,399,196,378\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"green\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":211.5,\"y\":388.5},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":385}}]"
        },
        {
            "date": "31.10.2022 11:56:44",
            "values": "[{\"id\":0,\"guid\":\"5189ab35-f02c-4760-9ee1-a8285d76433d\",\"name\":\"504\",\"type\":\"ReservedSeating\",\"capacity\":388,\"free\":375,\"coords\":\"272,377,305,377,305,399,272,399,272,377\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"green\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":288.5,\"y\":388},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":375}},{\"id\":0,\"guid\":\"7567dab6-84e6-4ced-a928-6e0c39f576bd\",\"name\":\"505\",\"type\":\"ReservedSeating\",\"capacity\":388,\"free\":233,\"coords\":\"233,378,265,378,265,399,233,399,233,378\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":249,\"y\":388.5},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":233}},{\"id\":0,\"guid\":\"9c523abd-72d1-40e0-abce-33ec2b25dc80\",\"name\":\"506\",\"type\":\"ReservedSeating\",\"capacity\":388,\"free\":383,\"coords\":\"196,378,227,378,227,399,196,399,196,378\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"green\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":211.5,\"y\":388.5},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":383}}]"
        }
    ],
    bg: {
        mobile: "https://leaan.seatgeekenterprise.com/weblink/1159/get.resource/images/1037/1005158.jpg?etag=D6428737E779776B9DEAAEF51BE43815",
        desktop: "https://leaan.seatgeekenterprise.com/weblink/1159/get.resource/images/1037/1005158.jpg?etag=D6428737E779776B9DEAAEF51BE43815"
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
    link: 'https://www.leaan.co.il/he-IL/events/%D7%94%D7%A4%D7%95%D7%A2%D7%9C%20%D7%97%D7%93%D7%A8%D7%94%20-%20%D7%9E%D7%9B%D7%91%D7%99%20%D7%A0%D7%AA%D7%A0%D7%99%D7%94/2022-11-5_17.30/%D7%90%D7%A6%D7%98%D7%93%D7%99%D7%95%D7%9F%20%20%D7%A0%D7%AA%D7%A0%D7%99%D7%94?hallmap',
    closedGates: []
}