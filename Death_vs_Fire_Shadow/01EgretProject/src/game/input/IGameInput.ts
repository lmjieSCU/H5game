interface IGameInput {
    initlize(param1: egret.Stage);

    setConfig(param1: Object);

    focus();

    anyKey(): boolean;

    back(): boolean;

    select(): boolean;

    up(): boolean;

    down(): boolean;

    left(): boolean;

    right(): boolean;

    attack(): boolean;

    jump(): boolean;

    dash(): boolean;

    skill(): boolean;

    superSkill(): boolean;

    special(): boolean;

    wankai(): boolean;

    clear();

}

