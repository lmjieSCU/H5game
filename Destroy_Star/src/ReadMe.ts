/** 文件说明
 * MainMoive类为游戏主逻辑文件,主要成员为FightUI以及各种控件
 * 点击模式分为两种:单击(true)与双击(false)
 * 背景音乐分为开启(Bgtag = true)/关闭(Bgtag = false)
 * GameModel文件为游戏模式,分为三种,闯关模式(NORMAL)/限时模式(TIMELIMIT)/限步模式(BULIMIT)
 * ItemModel文件标识道具种类
 * Props文件夹(游戏道具分为三种,炸弹(ItemBomb)/染色版(ItemPaints)/彩虹(ItemUpdate)
 * Prompts文件夹(游戏特效)包括烟花(FireWorks)/五角星(FivepointStar)/分数提示(ScoreTip)/通过提示(Pass)
 * TipsLauer文件夹包括各种游戏节点提示,该提示会覆盖星星
 */


//////////////////////////////////////////////////////////////////////////////////////////////////////////
/**战斗逻辑
 * 游戏准备阶段: IntoBeginTip
 * 游戏开始阶段: OutFromBeginTip 
 * 游戏进行阶段:  render
 * 游戏结束阶段:  FinishGame
 *      @闯关模式:  IntoFinishTip   ===>   OutFromFinishTip
 *      @限时模式:  切换FinishScene
 *      @记步模式:  切换FinishScene
 */
///////////////////////////////////////////////////////////////////////////////////////////////////////////


/**render函数
 * 玩家点击星星 => PromptTag = true,表明需增加道具
 * 道具函数GetPrompts:   加入烟花、五角星、分数提示特效
 * 调整位置函数UpdateLocation:    实现星星方块下落与向中靠拢
 */