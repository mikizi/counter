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
    title: 'מכבי נתניה - הפועל ירושלים',
    date: new Date(2024, 2, 5, 19, 0, 0),
    areas: [
            {
                "date": "2.3.2024 23:48:29",
                "values": "[{\"id\":0,\"guid\":\"3d3d8593-1366-4efb-af81-d58422a433e0\",\"name\":\"106\",\"type\":\"ReservedSeating\",\"capacity\":117,\"free\":49,\"coords\":\"209,86,217,86,217,102,209,102,209,86\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"95933853-03cd-eb11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"מערבי תחתון 106-109 (לא מסומן)\",\"displayStyle\":\"#336666\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"95933853-03cd-eb11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"95933853-03cd-eb11-80e7-984be16723b6\":60}},\"middle\":{\"x\":213,\"y\":94},\"priceLevelsAvailability\":{\"95933853-03cd-eb11-80e7-984be16723b6\":49}},{\"id\":0,\"guid\":\"1fa23588-7864-425b-871c-9deadf0aa766\",\"name\":\"107\",\"type\":\"ReservedSeating\",\"capacity\":324,\"free\":278,\"coords\":\"222,86,243,86,243,102,222,102,222,86\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"95933853-03cd-eb11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"מערבי תחתון 106-109 (לא מסומן)\",\"displayStyle\":\"#336666\"}},\"isBlocked\":false,\"oColor\":\"green\",\"priceLevels\":[\"95933853-03cd-eb11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"95933853-03cd-eb11-80e7-984be16723b6\":60}},\"middle\":{\"x\":232.5,\"y\":94},\"priceLevelsAvailability\":{\"95933853-03cd-eb11-80e7-984be16723b6\":278,\"30b2a3bd-1236-e711-80bf-984be16723b4\":0,\"569d1f93-515a-44be-8e9e-b35adc72196a\":0}},{\"id\":0,\"guid\":\"be279ac2-2815-4f46-a5f7-3afd597fbbed\",\"name\":\"108\",\"type\":\"ReservedSeating\",\"capacity\":389,\"free\":362,\"coords\":\"247,86,268,86,268,101,247,101,247,86\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"95933853-03cd-eb11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"מערבי תחתון 106-109 (לא מסומן)\",\"displayStyle\":\"#336666\"}},\"isBlocked\":false,\"oColor\":\"green\",\"priceLevels\":[\"95933853-03cd-eb11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"95933853-03cd-eb11-80e7-984be16723b6\":60}},\"middle\":{\"x\":257.5,\"y\":93.5},\"priceLevelsAvailability\":{\"95933853-03cd-eb11-80e7-984be16723b6\":362}},{\"id\":0,\"guid\":\"317d3c1e-002c-4ef8-bd41-6d07dbfb78c1\",\"name\":\"109\",\"type\":\"ReservedSeating\",\"capacity\":203,\"free\":189,\"coords\":\"272,86,290,88,285,98,272,100,272,86\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"95933853-03cd-eb11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"מערבי תחתון 106-109 (לא מסומן)\",\"displayStyle\":\"#336666\"}},\"isBlocked\":false,\"oColor\":\"green\",\"priceLevels\":[\"95933853-03cd-eb11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"95933853-03cd-eb11-80e7-984be16723b6\":60}},\"middle\":{\"x\":279.397857666016,\"y\":92.6236572265625},\"priceLevelsAvailability\":{\"95933853-03cd-eb11-80e7-984be16723b6\":189,\"c69cf6cd-df37-e811-80d0-984be1671368\":0}},{\"id\":0,\"guid\":\"2da874ad-95eb-4d38-97e1-0282ae90bcac\",\"name\":\"206L\",\"type\":\"ReservedSeating\",\"capacity\":459,\"free\":415,\"coords\":\"209,44,219,46,219,72,209,72,209,44\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"32f47f04-03cd-eb11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"מערבי עליון 206L-209 (לא מסומן)\",\"displayStyle\":\"#ffff33\"}},\"isBlocked\":false,\"oColor\":\"green\",\"priceLevels\":[\"32f47f04-03cd-eb11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"32f47f04-03cd-eb11-80e7-984be16723b6\":60}},\"middle\":{\"x\":213.938278198242,\"y\":58.4938278198242},\"priceLevelsAvailability\":{\"32f47f04-03cd-eb11-80e7-984be16723b6\":415}},{\"id\":0,\"guid\":\"a4b14126-9615-4b68-9d53-8085404d4a2a\",\"name\":\"207\",\"type\":\"ReservedSeating\",\"capacity\":439,\"free\":351,\"coords\":\"221,45,244,48,244,72,221,73,221,45\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"32f47f04-03cd-eb11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"מערבי עליון 206L-209 (לא מסומן)\",\"displayStyle\":\"#ffff33\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"32f47f04-03cd-eb11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"32f47f04-03cd-eb11-80e7-984be16723b6\":60}},\"middle\":{\"x\":232.205123901367,\"y\":59.4871788024902},\"priceLevelsAvailability\":{\"32f47f04-03cd-eb11-80e7-984be16723b6\":351}},{\"id\":0,\"guid\":\"dc089d74-5ca6-421e-b246-a36e278c989b\",\"name\":\"208\",\"type\":\"ReservedSeating\",\"capacity\":332,\"free\":304,\"coords\":\"247,49,270,55,270,73,247,73,247,49\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"32f47f04-03cd-eb11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"מערבי עליון 206L-209 (לא מסומן)\",\"displayStyle\":\"#ffff33\"}},\"isBlocked\":false,\"oColor\":\"green\",\"priceLevels\":[\"32f47f04-03cd-eb11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"32f47f04-03cd-eb11-80e7-984be16723b6\":60}},\"middle\":{\"x\":257.952392578125,\"y\":62.4285697937012},\"priceLevelsAvailability\":{\"32f47f04-03cd-eb11-80e7-984be16723b6\":304}},{\"id\":0,\"guid\":\"d676bf77-3da8-44eb-bfd3-ff75edda0ac8\",\"name\":\"209\",\"type\":\"ReservedSeating\",\"capacity\":222,\"free\":222,\"coords\":\"274,55,299,67,293,80,274,74,274,55\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"32f47f04-03cd-eb11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"מערבי עליון 206L-209 (לא מסומן)\",\"displayStyle\":\"#ffff33\"}},\"isBlocked\":false,\"oColor\":\"green\",\"priceLevels\":[\"32f47f04-03cd-eb11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"32f47f04-03cd-eb11-80e7-984be16723b6\":60}},\"middle\":{\"x\":284.697875976563,\"y\":68.4445877075195},\"priceLevelsAvailability\":{\"32f47f04-03cd-eb11-80e7-984be16723b6\":222}},{\"id\":0,\"guid\":\"95650550-40a3-4a7f-b12a-8cdf36ed00b9\",\"name\":\"כסף 105-C\",\"type\":\"ReservedSeating\",\"capacity\":325,\"free\":146,\"coords\":\"174,86,195,86,195,102,174,102,174,86\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"944482ec-03cd-eb11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"כסף תחתון אמצעי (מסומן)\",\"displayStyle\":\"#666699\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"944482ec-03cd-eb11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"944482ec-03cd-eb11-80e7-984be16723b6\":100}},\"middle\":{\"x\":184.5,\"y\":94},\"priceLevelsAvailability\":{\"944482ec-03cd-eb11-80e7-984be16723b6\":146,\"1970561b-c593-4d73-b83b-561916f6ea38\":0}},{\"id\":0,\"guid\":\"940f84ed-38f9-46e3-a590-4c05fa871c5c\",\"name\":\"כסף 105-L\",\"type\":\"ReservedSeating\",\"capacity\":239,\"free\":159,\"coords\":\"195,86,208,86,208,102,195,102,195,86\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"944482ec-03cd-eb11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"כסף תחתון אמצעי (מסומן)\",\"displayStyle\":\"#666699\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"944482ec-03cd-eb11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"944482ec-03cd-eb11-80e7-984be16723b6\":100}},\"middle\":{\"x\":201.5,\"y\":94},\"priceLevelsAvailability\":{\"1970561b-c593-4d73-b83b-561916f6ea38\":0,\"a7a8d0da-03cd-eb11-80e7-984be16723b6\":0,\"944482ec-03cd-eb11-80e7-984be16723b6\":159}},{\"id\":0,\"guid\":\"c17d459d-e4c8-444f-8376-e44d8f2f3fe7\",\"name\":\"כסף 105-R\",\"type\":\"ReservedSeating\",\"capacity\":241,\"free\":170,\"coords\":\"160,86,173,86,173,101,160,101,160,86\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"944482ec-03cd-eb11-80e7-984be16723b6\":{\"letter\":\"a\",\"name\":\"כסף תחתון אמצעי (מסומן)\",\"displayStyle\":\"#666699\"}},\"isBlocked\":false,\"oColor\":\"yellow\",\"priceLevels\":[\"944482ec-03cd-eb11-80e7-984be16723b6\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"944482ec-03cd-eb11-80e7-984be16723b6\":100}},\"middle\":{\"x\":166.5,\"y\":93.5},\"priceLevelsAvailability\":{\"1970561b-c593-4d73-b83b-561916f6ea38\":0,\"a7a8d0da-03cd-eb11-80e7-984be16723b6\":0,\"944482ec-03cd-eb11-80e7-984be16723b6\":170}}]"
            }
    ],
    bg: {
        mobile: "https://leaan.seatgeekenterprise.com/weblink/1159/get.resource/images/1033/1011517.jpg?etag=BC97B81C021130289E59C05376A77307",
        desktop: "https://leaan.seatgeekenterprise.com/weblink/1159/get.resource/images/1033/1011515.jpg?etag=15025A97441A80BAD1EBD62B0075B0E8"
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
    link: "https://www.leaan.co.il/he-IL/events/%D7%9E%D7%9B%D7%91%D7%99%20%D7%A0%D7%AA%D7%A0%D7%99%D7%94%20-%20%D7%94%D7%A4%D7%95%D7%A2%D7%9C%20%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D/2024-3-5_19.00/%D7%90%D7%A6%D7%98%D7%93%D7%99%D7%95%D7%9F%20%20%D7%A0%D7%AA%D7%A0%D7%99%D7%94?hallmap",
    closedGates: []
}