class TaskConfig {
    public static task = [
        [
            {type: 1, lv: 0, count: 1, info: "进行1场排位对局"},
            {type: 2, lv: 0, count: 1, info: "进行1局试炼模式"},
            {type: 3, lv: 0, count: 5, info: "进行5次抽奖"}
        ],
        [
            {type: 1, lv: 1, count: 3, info: "获取3次排位对局胜利"},
            {type: 2, lv: 1, count: 1, info: "通过第五关试炼模式"},
            {type: 3, lv: 1, count: 1, info: "释放1次技能"},
        ],
        [
            {type: 1, lv: 2, count: 1, info: "通过试炼模式第10关"},
            {type: 2, lv: 2, count: 1, info: "晋升1个段位"},
            {type: 3, lv: 2, count: 1, info: "获得（合成）1个技能。"},
        ],
        [//当lv为3时，应当是完成了所有任务,这里只是为了展示
            {type: 1, lv: 3, count: 1, info: "通过试炼模式第10关"},
            {type: 2, lv: 3, count: 1, info: "晋升1个段位"},
            {type: 3, lv: 3, count: 1, info: "获得（合成）1个技能。"},
        ],
        [
            {type: 1, lv: 4, count: 1, info: "不使用任何技能击败对手"},
            {type: 2, lv: 4, count: 1, info: "在30S内击败对手"},
            {type: 3, lv: 4, count: 1, info: "通过试炼模式第11关"},
        ]
    ]
}