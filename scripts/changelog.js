Hooks.once("init", async () => {
  game.settings.register("rubyq-dnd5-lib", "version", {
    name: "Version",
    type: String,
    default: 0,
    scope: "world",
    config: false,
    restricted: false,
  });

  if (
    game.settings.get("rubyq-dnd5-lib", "version") !==
    game.modules.get("rubyq-dnd5-lib").data.version
  ) {
    new Dialog({
      title: "Список изменений RubyQ's stuff",
      content:``
,
      buttons: {
        done: {
          label: "Не показывать до следующего обновления",
          callback: () => {
            game.settings.set(
              "rubyq-dnd5-lib",
              "version",
              game.modules.get("rubyq-dnd5-lib").data.version
            );
          },
        },
      },
    }).render(true);
  }
});  