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
    title: 'מ.ס אשדוד - מכבי נתניה',
    date: new Date(2022, 10, 12, 15, 0, 0),
    areas: [
        {
            "date": "8.11.2022 12:10:49",
            "values": "[{\"id\":0,\"guid\":\"e6adf93a-5a3e-4146-a458-4bdcb4a9bf1a\",\"name\":\"גוש י\",\"type\":\"ReservedSeating\",\"capacity\":764,\"free\":710,\"coords\":\"490,151,490,228,546,228,558,152,490,151\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"45f43ce5-8edd-40d7-879d-7bf0b5b2ca17\",\"name\":\"איצטדיון הי\\\"א באשדוד\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"green\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":521.036376953125,\"y\":188.508361816406},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":710}}]"
        },
        {
            "date": "9.11.2022 10:45:47",
            "values": "[{\"id\":0,\"guid\":\"e6adf93a-5a3e-4146-a458-4bdcb4a9bf1a\",\"name\":\"גוש י\",\"type\":\"ReservedSeating\",\"capacity\":764,\"free\":697,\"coords\":\"490,151,490,228,546,228,558,152,490,151\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"45f43ce5-8edd-40d7-879d-7bf0b5b2ca17\",\"name\":\"איצטדיון הי\\\"א באשדוד\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"green\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":521.036376953125,\"y\":188.508361816406},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":697}}]"
        },
        {
            "date": "9.11.2022 15:14:27",
            "values": "[{\"id\":0,\"guid\":\"e6adf93a-5a3e-4146-a458-4bdcb4a9bf1a\",\"name\":\"גוש י\",\"type\":\"ReservedSeating\",\"capacity\":764,\"free\":689,\"coords\":\"490,151,490,228,546,228,558,152,490,151\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"45f43ce5-8edd-40d7-879d-7bf0b5b2ca17\",\"name\":\"איצטדיון הי\\\"א באשדוד\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"green\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":521.036376953125,\"y\":188.508361816406},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":689}}]"
        },
        {
            "date": "10.11.2022 2:35:52",
            "values": "[{\"id\":0,\"guid\":\"e6adf93a-5a3e-4146-a458-4bdcb4a9bf1a\",\"name\":\"גוש י\",\"type\":\"ReservedSeating\",\"capacity\":764,\"free\":675,\"coords\":\"490,151,490,228,546,228,558,152,490,151\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"45f43ce5-8edd-40d7-879d-7bf0b5b2ca17\",\"name\":\"איצטדיון הי\\\"א באשדוד\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"green\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":521.036376953125,\"y\":188.508361816406},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":675}}]"
        },
        {
            "date": "10.11.2022 9:47:07",
            "values": "[{\"id\":0,\"guid\":\"e6adf93a-5a3e-4146-a458-4bdcb4a9bf1a\",\"name\":\"גוש י\",\"type\":\"ReservedSeating\",\"capacity\":764,\"free\":673,\"coords\":\"490,151,490,228,546,228,558,152,490,151\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"45f43ce5-8edd-40d7-879d-7bf0b5b2ca17\",\"name\":\"איצטדיון הי\\\"א באשדוד\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"green\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":521.036376953125,\"y\":188.508361816406},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":673}}]"
        },
        {
            "date": "10.11.2022 22:19:39",
            "values": "[{\"id\":0,\"guid\":\"e6adf93a-5a3e-4146-a458-4bdcb4a9bf1a\",\"name\":\"גוש י\",\"type\":\"ReservedSeating\",\"capacity\":764,\"free\":648,\"coords\":\"490,151,490,228,546,228,558,152,490,151\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"45f43ce5-8edd-40d7-879d-7bf0b5b2ca17\",\"name\":\"איצטדיון הי\\\"א באשדוד\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":521.036376953125,\"y\":188.508361816406},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":648}}]"
        },
        {
            "date": "11.11.2022 11:27:06",
            "values": "[{\"id\":0,\"guid\":\"e6adf93a-5a3e-4146-a458-4bdcb4a9bf1a\",\"name\":\"גוש י\",\"type\":\"ReservedSeating\",\"capacity\":764,\"free\":629,\"coords\":\"490,151,490,228,546,228,558,152,490,151\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"45f43ce5-8edd-40d7-879d-7bf0b5b2ca17\",\"name\":\"איצטדיון הי\\\"א באשדוד\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":521.036376953125,\"y\":188.508361816406},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":629}}]"
        },
        {
            "date": "11.11.2022 14:22:07",
            "values": "[{\"id\":0,\"guid\":\"e6adf93a-5a3e-4146-a458-4bdcb4a9bf1a\",\"name\":\"גוש י\",\"type\":\"ReservedSeating\",\"capacity\":764,\"free\":612,\"coords\":\"490,151,490,228,546,228,558,152,490,151\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"45f43ce5-8edd-40d7-879d-7bf0b5b2ca17\",\"name\":\"איצטדיון הי\\\"א באשדוד\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":521.036376953125,\"y\":188.508361816406},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":612}}]"
        },
        {
            "date": "11.11.2022 16:11:07",
            "values": "[{\"id\":0,\"guid\":\"e6adf93a-5a3e-4146-a458-4bdcb4a9bf1a\",\"name\":\"גוש י\",\"type\":\"ReservedSeating\",\"capacity\":764,\"free\":604,\"coords\":\"490,151,490,228,546,228,558,152,490,151\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"45f43ce5-8edd-40d7-879d-7bf0b5b2ca17\",\"name\":\"איצטדיון הי\\\"א באשדוד\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":521.036376953125,\"y\":188.508361816406},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":604}}]"
        },
        {
            "date": "11.11.2022 17:38:06",
            "values": "[{\"id\":0,\"guid\":\"e6adf93a-5a3e-4146-a458-4bdcb4a9bf1a\",\"name\":\"גוש י\",\"type\":\"ReservedSeating\",\"capacity\":764,\"free\":598,\"coords\":\"490,151,490,228,546,228,558,152,490,151\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"45f43ce5-8edd-40d7-879d-7bf0b5b2ca17\",\"name\":\"איצטדיון הי\\\"א באשדוד\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"1f5203de-a860-ec11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"קבוצה אורחת\",\"displayStyle\":\"#0033ff\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"1f5203de-a860-ec11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":71}},\"middle\":{\"x\":521.036376953125,\"y\":188.508361816406},\"priceLevelsAvailability\":{\"1f5203de-a860-ec11-80e7-984be16723b6\":598}}]"
        }
    ],
    bg: {
        mobile: "https://shefa.seatgeekenterprise.com/weblink/1731/get.resource/images/1033/1003555.png?etag=5C28415C9729EC7704F002E4D53F2973",
        desktop: "https://leaan.seatgeekenterprise.com/weblink/1159/get.resource/images/1037/1012728.jpg?etag=6F35A980F45CC6E7D52AF751B0DB812D"
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
    link: 'https://www.leaan.co.il/he-IL/events/%D7%9E_%D7%A1%20%D7%90%D7%A9%D7%93%D7%95%D7%93%20-%20%D7%9E%D7%9B%D7%91%D7%99%20%D7%A0%D7%AA%D7%A0%D7%99%D7%94/2022-11-12_15.00/%D7%90%D7%99%D7%A6%D7%98%D7%93%D7%99%D7%95%D7%9F%20%D7%94%D7%99\'%D7%90%20%D7%91%D7%90%D7%A9%D7%93%D7%95%D7%93?hallmap',
    closedGates: []
}