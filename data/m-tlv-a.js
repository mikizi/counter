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
    title: 'מכבי ת"א - מכבי נתניה',
    date: new Date(2022, 9, 24, 20, 30, 0),
    areas: [
        {
            "date": "19.10.2022 17:35:39",
            "values": "[{\"id\":0,\"guid\":\"fbbec6d9-db81-e911-80dd-984be16723b6\",\"name\":\"317\",\"type\":\"ReservedSeating\",\"capacity\":638,\"free\":564,\"coords\":\"469,295,463,326,439,319,440,316,436,314,435,318,426,316,427,313,417,310,421,292,430,294,431,290,440,291,440,295,444,296,444,292,469,295\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"b9a3662b-3981-e911-80dd-984be16723b6\",\"name\":\"בלומפילד - תל אביב\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"green\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":444.507080078125,\"y\":306.159454345703},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":564}}]"
        },
        {
            "date": "19.10.2022 18:53:27",
            "values": "[{\"id\":0,\"guid\":\"fbbec6d9-db81-e911-80dd-984be16723b6\",\"name\":\"317\",\"type\":\"ReservedSeating\",\"capacity\":638,\"free\":564,\"coords\":\"469,295,463,326,439,319,440,316,436,314,435,318,426,316,427,313,417,310,421,292,430,294,431,290,440,291,440,295,444,296,444,292,469,295\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"b9a3662b-3981-e911-80dd-984be16723b6\",\"name\":\"בלומפילד - תל אביב\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"green\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":444.507080078125,\"y\":306.159454345703},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":564}}]"
        },
        {
            "date": "21.10.2022 1:58:56",
            "values": "[{\"id\":0,\"guid\":\"fbbec6d9-db81-e911-80dd-984be16723b6\",\"name\":\"317\",\"type\":\"ReservedSeating\",\"capacity\":638,\"free\":480,\"coords\":\"469,295,463,326,439,319,440,316,436,314,435,318,426,316,427,313,417,310,421,292,430,294,431,290,440,291,440,295,444,296,444,292,469,295\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"b9a3662b-3981-e911-80dd-984be16723b6\",\"name\":\"בלומפילד - תל אביב\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":444.507080078125,\"y\":306.159454345703},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":480}}]"
        },
        {
            "date": "21.10.2022 14:31:41",
            "values": "[{\"id\":0,\"guid\":\"fbbec6d9-db81-e911-80dd-984be16723b6\",\"name\":\"317\",\"type\":\"ReservedSeating\",\"capacity\":638,\"free\":467,\"coords\":\"469,295,463,326,439,319,440,316,436,314,435,318,426,316,427,313,417,310,421,292,430,294,431,290,440,291,440,295,444,296,444,292,469,295\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"b9a3662b-3981-e911-80dd-984be16723b6\",\"name\":\"בלומפילד - תל אביב\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":444.507080078125,\"y\":306.159454345703},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":467}}]"
        },
        {
            "date": "21.10.2022 17:18:53",
            "values": "[{\"id\":0,\"guid\":\"fbbec6d9-db81-e911-80dd-984be16723b6\",\"name\":\"317\",\"type\":\"ReservedSeating\",\"capacity\":638,\"free\":450,\"coords\":\"469,295,463,326,439,319,440,316,436,314,435,318,426,316,427,313,417,310,421,292,430,294,431,290,440,291,440,295,444,296,444,292,469,295\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"b9a3662b-3981-e911-80dd-984be16723b6\",\"name\":\"בלומפילד - תל אביב\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":444.507080078125,\"y\":306.159454345703},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":450}}]"
        },
        {
            "date": "21.10.2022 23:12:53",
            "values": "[{\"id\":0,\"guid\":\"fbbec6d9-db81-e911-80dd-984be16723b6\",\"name\":\"317\",\"type\":\"ReservedSeating\",\"capacity\":638,\"free\":447,\"coords\":\"469,295,463,326,439,319,440,316,436,314,435,318,426,316,427,313,417,310,421,292,430,294,431,290,440,291,440,295,444,296,444,292,469,295\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"b9a3662b-3981-e911-80dd-984be16723b6\",\"name\":\"בלומפילד - תל אביב\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":444.507080078125,\"y\":306.159454345703},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":447}}]"
        },
        {
            "date": "22.10.2022 22:58:55",
            "values": "[{\"id\":0,\"guid\":\"fbbec6d9-db81-e911-80dd-984be16723b6\",\"name\":\"317\",\"type\":\"ReservedSeating\",\"capacity\":638,\"free\":397,\"coords\":\"469,295,463,326,439,319,440,316,436,314,435,318,426,316,427,313,417,310,421,292,430,294,431,290,440,291,440,295,444,296,444,292,469,295\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"b9a3662b-3981-e911-80dd-984be16723b6\",\"name\":\"בלומפילד - תל אביב\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":444.507080078125,\"y\":306.159454345703},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":397}}]"
        },
        {
            "date": "23.10.2022 2:19:08",
            "values": "[{\"id\":0,\"guid\":\"fbbec6d9-db81-e911-80dd-984be16723b6\",\"name\":\"317\",\"type\":\"ReservedSeating\",\"capacity\":638,\"free\":388,\"coords\":\"469,295,463,326,439,319,440,316,436,314,435,318,426,316,427,313,417,310,421,292,430,294,431,290,440,291,440,295,444,296,444,292,469,295\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"b9a3662b-3981-e911-80dd-984be16723b6\",\"name\":\"בלומפילד - תל אביב\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":444.507080078125,\"y\":306.159454345703},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":388}}]"
        },
        {
            "date": "23.10.2022 15:59:38",
            "values": "[{\"id\":0,\"guid\":\"fbbec6d9-db81-e911-80dd-984be16723b6\",\"name\":\"317\",\"type\":\"ReservedSeating\",\"capacity\":638,\"free\":276,\"coords\":\"469,295,463,326,439,319,440,316,436,314,435,318,426,316,427,313,417,310,421,292,430,294,431,290,440,291,440,295,444,296,444,292,469,295\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"b9a3662b-3981-e911-80dd-984be16723b6\",\"name\":\"בלומפילד - תל אביב\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":444.507080078125,\"y\":306.159454345703},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":276}}]"
        }
        
    ],
    bg: {
        mobile: "https://leaan.seatgeekenterprise.com/weblink/1159/get.resource/images/1033/1013088.jpg?etag=AC741687A9B1F858066E36C538E6A9C0",
        desktop: "https://leaan.seatgeekenterprise.com/weblink/1159/get.resource/images/1037/1013086.jpg?etag=50E21E67C2958D289E6A895004CA23C6"
    },
    header: {
        style: {
            mobile: {
                height: '320px',
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
    link: 'https://www.leaan.co.il/he-IL/events/%D7%9E%D7%9B%D7%91%D7%99%20%D7%AA\'%D7%90%20-%20%D7%9E%D7%9B%D7%91%D7%99%20%D7%A0%D7%AA%D7%A0%D7%99%D7%94/2022-10-24_20.30/%D7%91%D7%9C%D7%95%D7%9E%D7%A4%D7%99%D7%9C%D7%93%20-%20%D7%AA%D7%9C%20%D7%90%D7%91%D7%99%D7%91/2?hallmap',
    closedGates: []
}