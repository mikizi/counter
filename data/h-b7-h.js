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
    title: 'מכבי נתניה - הפועל באר שבע',
    date: new Date(2022, 9, 1, 20, 0, 0),
    areas: [
        {
            "date": "27.9.2022 18:21:22",
            "values": "[{\"id\":0,\"guid\":\"aaf2ec2f-529b-4961-8696-78e275df6eb0\",\"name\":\"501\",\"type\":\"ReservedSeating\",\"capacity\":211,\"free\":189,\"coords\":\"273,247,290,253,288,260,273,260,273,247\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"30b2a3bd-1236-e711-80bf-984be16723b4\":{\"letter\":\"a\",\"name\":\"מכבי נתניה מזרחי תחתון\",\"displayStyle\":\"#006666\"},\"1970561b-c593-4d73-b83b-561916f6ea38\":{\"letter\":\"b\",\"name\":\"לא קיים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"green\",\"priceLevels\":[\"30b2a3bd-1236-e711-80bf-984be16723b4\",\"1970561b-c593-4d73-b83b-561916f6ea38\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"30b2a3bd-1236-e711-80bf-984be16723b4\":66}},\"middle\":{\"x\":280.277099609375,\"y\":254.729034423828}},{\"id\":0,\"guid\":\"bea070af-e6ad-4f20-87e0-ac2185253b97\",\"name\":\"502\",\"type\":\"ReservedSeating\",\"capacity\":388,\"free\":331,\"coords\":\"249,246,269,246,269,260,249,260,249,246\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"30b2a3bd-1236-e711-80bf-984be16723b4\":{\"letter\":\"a\",\"name\":\"מכבי נתניה מזרחי תחתון\",\"displayStyle\":\"#006666\"}},\"oColor\":\"green\",\"priceLevels\":[\"30b2a3bd-1236-e711-80bf-984be16723b4\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"30b2a3bd-1236-e711-80bf-984be16723b4\":66}},\"middle\":{\"x\":259,\"y\":253}},{\"id\":0,\"guid\":\"ed542a1f-4852-4306-b31a-9cbc7786e93e\",\"name\":\"503\",\"type\":\"ReservedSeating\",\"capacity\":327,\"free\":236,\"coords\":\"224,245,244,245,244,260,224,260,224,245\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"30b2a3bd-1236-e711-80bf-984be16723b4\":{\"letter\":\"a\",\"name\":\"מכבי נתניה מזרחי תחתון\",\"displayStyle\":\"#006666\"}},\"oColor\":\"yellow\",\"priceLevels\":[\"30b2a3bd-1236-e711-80bf-984be16723b4\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"30b2a3bd-1236-e711-80bf-984be16723b4\":66}},\"middle\":{\"x\":234,\"y\":252.5}},{\"id\":0,\"guid\":\"5189ab35-f02c-4760-9ee1-a8285d76433d\",\"name\":\"504\",\"type\":\"ReservedSeating\",\"capacity\":388,\"free\":79,\"coords\":\"198,245,220,245,220,260,198,260,198,245\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"30b2a3bd-1236-e711-80bf-984be16723b4\":{\"letter\":\"a\",\"name\":\"מכבי נתניה מזרחי תחתון\",\"displayStyle\":\"#006666\"}},\"oColor\":\"yellow\",\"priceLevels\":[\"30b2a3bd-1236-e711-80bf-984be16723b4\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"30b2a3bd-1236-e711-80bf-984be16723b4\":66}},\"middle\":{\"x\":209,\"y\":252.5}},{\"id\":0,\"guid\":\"7567dab6-84e6-4ced-a928-6e0c39f576bd\",\"name\":\"505\",\"type\":\"ReservedSeating\",\"capacity\":388,\"free\":388,\"coords\":\"172,246,195,246,195,259,172,259,172,246\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"b30c642d-b23c-e811-80d1-984be16723b4\":{\"letter\":\"a\",\"name\":\"הושבה מזרחי אמצעי\",\"displayStyle\":\"#ccff00\"}},\"oColor\":\"green\",\"priceLevels\":[\"b30c642d-b23c-e811-80d1-984be16723b4\"],\"priceList\":{},\"middle\":{\"x\":183.5,\"y\":252.5}},{\"id\":0,\"guid\":\"9c523abd-72d1-40e0-abce-33ec2b25dc80\",\"name\":\"506\",\"type\":\"ReservedSeating\",\"capacity\":388,\"free\":388,\"coords\":\"148,246,168,246,168,259,148,259,148,246\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"b30c642d-b23c-e811-80d1-984be16723b4\":{\"letter\":\"a\",\"name\":\"הושבה מזרחי אמצעי\",\"displayStyle\":\"#ccff00\"}},\"oColor\":\"green\",\"priceLevels\":[\"b30c642d-b23c-e811-80d1-984be16723b4\"],\"priceList\":{},\"middle\":{\"x\":158,\"y\":252.5}},{\"id\":0,\"guid\":\"8d0aae24-85de-40e4-a107-865454d14df5\",\"name\":\"601\",\"type\":\"ReservedSeating\",\"capacity\":222,\"free\":222,\"coords\":\"273,274,293,270,298,282,273,293,273,274\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"229b79b4-1236-e711-80bf-984be16723b4\":{\"letter\":\"a\",\"name\":\"מכבי נתניה מזרחי עליון\",\"displayStyle\":\"#006666\"}},\"oColor\":\"green\",\"priceLevels\":[\"229b79b4-1236-e711-80bf-984be16723b4\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"229b79b4-1236-e711-80bf-984be16723b4\":66}},\"middle\":{\"x\":283.691619873047,\"y\":280.287994384766}},{\"id\":0,\"guid\":\"58e4b696-01a0-424f-96fa-ac80e0f9264d\",\"name\":\"602\",\"type\":\"ReservedSeating\",\"capacity\":347,\"free\":333,\"coords\":\"248,275,272,275,272,292,249,298,248,275\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"229b79b4-1236-e711-80bf-984be16723b4\":{\"letter\":\"a\",\"name\":\"מכבי נתניה מזרחי עליון\",\"displayStyle\":\"#006666\"}},\"oColor\":\"green\",\"priceLevels\":[\"229b79b4-1236-e711-80bf-984be16723b4\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"229b79b4-1236-e711-80bf-984be16723b4\":66}},\"middle\":{\"x\":259.650421142578,\"y\":285.016265869141}},{\"id\":0,\"guid\":\"c0735be9-7489-45f8-85ef-1a7557df5818\",\"name\":\"603\",\"type\":\"ReservedSeating\",\"capacity\":445,\"free\":388,\"coords\":\"223,274,247,274,247,299,224,302,223,274\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"229b79b4-1236-e711-80bf-984be16723b4\":{\"letter\":\"a\",\"name\":\"מכבי נתניה מזרחי עליון\",\"displayStyle\":\"#006666\"}},\"oColor\":\"green\",\"priceLevels\":[\"229b79b4-1236-e711-80bf-984be16723b4\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"229b79b4-1236-e711-80bf-984be16723b4\":66}},\"middle\":{\"x\":235.022186279297,\"y\":287.175903320313}},{\"id\":0,\"guid\":\"4a0e18fc-5d6f-4780-b28d-c74695055865\",\"name\":\"604\",\"type\":\"ReservedSeating\",\"capacity\":503,\"free\":314,\"coords\":\"197,274,220,274,220,303,197,304,197,274\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"229b79b4-1236-e711-80bf-984be16723b4\":{\"letter\":\"a\",\"name\":\"מכבי נתניה מזרחי עליון\",\"displayStyle\":\"#006666\"}},\"oColor\":\"yellow\",\"priceLevels\":[\"229b79b4-1236-e711-80bf-984be16723b4\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"229b79b4-1236-e711-80bf-984be16723b4\":66}},\"middle\":{\"x\":208.435028076172,\"y\":288.751403808594}},{\"id\":0,\"guid\":\"80e92302-7f6a-4a0d-94dd-f2dde18bc048\",\"name\":\"605\",\"type\":\"ReservedSeating\",\"capacity\":480,\"free\":297,\"coords\":\"172,274,196,274,196,303,172,303,172,274\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"229b79b4-1236-e711-80bf-984be16723b4\":{\"letter\":\"a\",\"name\":\"מכבי נתניה מזרחי עליון\",\"displayStyle\":\"#006666\"}},\"oColor\":\"yellow\",\"priceLevels\":[\"229b79b4-1236-e711-80bf-984be16723b4\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"229b79b4-1236-e711-80bf-984be16723b4\":66}},\"middle\":{\"x\":184,\"y\":288.5}},{\"id\":0,\"guid\":\"4df68d7a-00ad-4653-817a-c76e0deaa45c\",\"name\":\"606\",\"type\":\"ReservedSeating\",\"capacity\":501,\"free\":465,\"coords\":\"148,275,169,275,169,304,148,302,148,275\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"229b79b4-1236-e711-80bf-984be16723b4\":{\"letter\":\"a\",\"name\":\"מכבי נתניה מזרחי עליון\",\"displayStyle\":\"#006666\"}},\"oColor\":\"green\",\"priceLevels\":[\"229b79b4-1236-e711-80bf-984be16723b4\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"229b79b4-1236-e711-80bf-984be16723b4\":66}},\"middle\":{\"x\":158.625,\"y\":289.005950927734}},{\"id\":0,\"guid\":\"53c7f7f2-4097-49a6-b059-0e7f24c70ead\",\"name\":\"E\",\"type\":\"ReservedSeating\",\"capacity\":524,\"free\":316,\"coords\":\"75,260,294,260,280,273,83,273,75,260\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"5ef20564-dae2-4be8-9b1c-0ba2b76e1dce\",\"name\":\"אצטדיון  נתניה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"df03f92e-9fcd-45ee-8514-c8ee217af395\":{\"letter\":\"a\",\"name\":\"E\",\"displayStyle\":\"#3300ff\"}},\"oColor\":\"yellow\",\"priceLevels\":[\"df03f92e-9fcd-45ee-8514-c8ee217af395\"],\"priceList\":{},\"middle\":{\"x\":183.026504516602,\"y\":266.385406494141}}]"
        }
    ],
    bg: {
        mobile: "https://leaan.co.il/LeanWebLink/1159/get.resource/images/1033/1013649.jpg?etag=7FFDE06279804769B871196C12840DE0    ",
        desktop: "https://leaan.co.il/LeanWebLink/1159/get.resource/images/1037/1013647.jpg?etag=F94756748FB7561D97D0FFA27EF0F6B9"
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
    link: 'https://leaan.co.il/he-IL/events/%d7%9e%d7%9b%d7%91%d7%99%20%d7%a0%d7%aa%d7%a0%d7%99%d7%94%20-%20%d7%94%d7%a4%d7%95%d7%a2%d7%9c%20%d7%91%d7%90%d7%a8%20%d7%a9%d7%91%d7%a2/2022-10-1_20.00/%d7%90%d7%a6%d7%98%d7%93%d7%99%d7%95%d7%9f%20%20%d7%a0%d7%aa%d7%a0%d7%99%d7%94?hallmap',
    closedGates: []
}