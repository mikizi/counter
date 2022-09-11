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
    title: 'הפועל חיפה - מכבי נתניה',
    date: new Date(2022, 8, 17, 20, 0, 0),
    areas: [
        {
            "date": "9.9.2022 9:48:52",
            "values": "[{\"id\":0,\"guid\":\"4a40558f-8403-49c0-a2d8-52a677c60693\",\"name\":\"130\",\"type\":\"ReservedSeating\",\"capacity\":485,\"free\":477,\"coords\":\"424,305,470,305,470,331,465,342,425,323,424,305\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"green\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":71}},\"middle\":{\"x\":449.6357421875,\"y\":319.438598632813}},{\"id\":0,\"guid\":\"7cfb0de0-0c5a-4b13-82b5-01a43a64e9d9\",\"name\":\"236\",\"type\":\"ReservedSeating\",\"capacity\":354,\"free\":354,\"coords\":\"472,305,510,305,509,343,470,336,472,331,472,305\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"green\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":71}},\"middle\":{\"x\":491.274688720703,\"y\":322.373474121094}}]"
        },
        {
            "date": "10.9.2022 22:36:49",
            "values": "[{\"id\":0,\"guid\":\"4a40558f-8403-49c0-a2d8-52a677c60693\",\"name\":\"130\",\"type\":\"ReservedSeating\",\"capacity\":485,\"free\":475,\"coords\":\"424,305,470,305,470,331,465,342,425,323,424,305\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"green\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":71}},\"middle\":{\"x\":449.6357421875,\"y\":319.438598632813}},{\"id\":0,\"guid\":\"7cfb0de0-0c5a-4b13-82b5-01a43a64e9d9\",\"name\":\"236\",\"type\":\"ReservedSeating\",\"capacity\":354,\"free\":354,\"coords\":\"472,305,510,305,509,343,470,336,472,331,472,305\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"green\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":71}},\"middle\":{\"x\":491.274688720703,\"y\":322.373474121094}}]"
        },
        {
            "date": "10.9.2022 23:43:37",
            "values": "[{\"id\":0,\"guid\":\"4a40558f-8403-49c0-a2d8-52a677c60693\",\"name\":\"130\",\"type\":\"ReservedSeating\",\"capacity\":485,\"free\":475,\"coords\":\"424,305,470,305,470,331,465,342,425,323,424,305\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"green\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":71}},\"middle\":{\"x\":449.6357421875,\"y\":319.438598632813}},{\"id\":0,\"guid\":\"7cfb0de0-0c5a-4b13-82b5-01a43a64e9d9\",\"name\":\"236\",\"type\":\"ReservedSeating\",\"capacity\":354,\"free\":352,\"coords\":\"472,305,510,305,509,343,470,336,472,331,472,305\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"green\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":71}},\"middle\":{\"x\":491.274688720703,\"y\":322.373474121094}}]"
        },
        {
            "date": "11.9.2022 0:53:57",
            "values": "[{\"id\":0,\"guid\":\"4a40558f-8403-49c0-a2d8-52a677c60693\",\"name\":\"130\",\"type\":\"ReservedSeating\",\"capacity\":485,\"free\":475,\"coords\":\"424,305,470,305,470,331,465,342,425,323,424,305\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"green\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":71}},\"middle\":{\"x\":449.6357421875,\"y\":319.438598632813}},{\"id\":0,\"guid\":\"7cfb0de0-0c5a-4b13-82b5-01a43a64e9d9\",\"name\":\"236\",\"type\":\"ReservedSeating\",\"capacity\":354,\"free\":353,\"coords\":\"472,305,510,305,509,343,470,336,472,331,472,305\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"green\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":71}},\"middle\":{\"x\":491.274688720703,\"y\":322.373474121094}}]"
        },
        {
            "date": "11.9.2022 18:58:03",
            "values": "[{\"id\":0,\"guid\":\"4a40558f-8403-49c0-a2d8-52a677c60693\",\"name\":\"130\",\"type\":\"ReservedSeating\",\"capacity\":485,\"free\":470,\"coords\":\"424,305,470,305,470,331,465,342,425,323,424,305\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"green\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":71}},\"middle\":{\"x\":449.6357421875,\"y\":319.438598632813}},{\"id\":0,\"guid\":\"7cfb0de0-0c5a-4b13-82b5-01a43a64e9d9\",\"name\":\"236\",\"type\":\"ReservedSeating\",\"capacity\":354,\"free\":352,\"coords\":\"472,305,510,305,509,343,470,336,472,331,472,305\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"green\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":71}},\"middle\":{\"x\":491.274688720703,\"y\":322.373474121094}}]"
        },
        {
            "date": "11.9.2022 20:00:10",
            "values": "[{\"id\":0,\"guid\":\"4a40558f-8403-49c0-a2d8-52a677c60693\",\"name\":\"130\",\"type\":\"ReservedSeating\",\"capacity\":485,\"free\":470,\"coords\":\"424,305,470,305,470,331,465,342,425,323,424,305\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"green\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":71}},\"middle\":{\"x\":449.6357421875,\"y\":319.438598632813}},{\"id\":0,\"guid\":\"7cfb0de0-0c5a-4b13-82b5-01a43a64e9d9\",\"name\":\"236\",\"type\":\"ReservedSeating\",\"capacity\":354,\"free\":352,\"coords\":\"472,305,510,305,509,343,470,336,472,331,472,305\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"green\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":71}},\"middle\":{\"x\":491.274688720703,\"y\":322.373474121094}}]"
        }
    ],
    bg: {
        mobile: "https://www.leaan.co.il/LeanWebLink/1159/get.resource/images/1033/1006940.jpg?etag=7BDD6BC26F50F978AE25376A20CDC32C",
        desktop: "https://www.leaan.co.il/LeanWebLink/1159/get.resource/images/1037/1006938.jpg?etag=AA459FA4D9546B74D603AE87166E46A8"
    },
    header: {
        style: {
            mobile: {
                height: '320px',
                backgroundPositionY: 'bottom'
            },
            desktop: {
                height: '480px',
                backgroundColor: '#010309'
            }
        }
    },
    base: {
        capacity: 0, //gatesCapacity.west.g_206 + gatesCapacity.west.g_206 ,
        free: 0,
        taken: 0
    },
    link: 'https://www.leaan.co.il/he-IL/events/%d7%94%d7%a4%d7%95%d7%a2%d7%9c%20%d7%97%d7%99%d7%a4%d7%94%20-%20%d7%9e%d7%9b%d7%91%d7%99%20%d7%a0%d7%aa%d7%a0%d7%99%d7%94/2022-9-17_20.00/%d7%90%d7%a6%d7%98%d7%93%d7%99%d7%95%d7%9f%20%d7%a1%d7%9e%d7%99%20%d7%a2%d7%95%d7%a4%d7%a8%20-%20%d7%97%d7%99%d7%a4%d7%94?hallmap',
    closedGates: []
}