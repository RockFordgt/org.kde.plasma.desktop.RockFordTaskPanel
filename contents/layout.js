var panel = new Panel
var panelScreen = panel.screen
var freeEdges = {"bottom": true, "top": true, "left": true, "right": true}

for (i = 0; i < panelIds.length; ++i) {
    var tmpPanel = panelById(panelIds[i])
    if (tmpPanel.screen == panelScreen) {
        // Ignore the new panel
        if (tmpPanel.id != panel.id) {
            freeEdges[tmpPanel.location] = false;
        }
    }
}

if (freeEdges["right"] == true) {
    panel.location = "right";
} else if (freeEdges["bottom"] == true) {
    panel.location = "bottom";
} else if (freeEdges["top"] == true) {
    panel.location = "top";
} else if (freeEdges["left"] == true) {
    panel.location = "left";
} else {
    // There is no free edge, so leave the default value
    panel.location = "right";
}

//panel.height = screenGeometry(panel.screen).height; // > 1024 ? 35 : 27
panel.width = 45;

var kickoff = panel.addWidget("org.kde.plasma.kickoff");
kickoff.currentConfigGroup = ["Shortcuts"];
kickoff.writeConfig("global", "Alt+F1");

//panel.addWidget("org.kde.plasma.showActivityManager")
panel.addWidget("org.kde.plasma.showdesktop");

var taskMgr = panel.addWidget("org.kde.plasma.taskmanager");
taskMgr.currentConfigGroup = ["General"];
taskMgr.writeConfig("showOnlyCurrentDesktop", "true");

var digitalClock = panel.addWidget("org.kde.plasma.digitalclock");
digitalClock.currentConfigGroup = ["Appearance"];
digitalClock.writeConfig("boldText", "true");
digitalClock.writeConfig("showDate", "true");

var systemLoad = panel.addWidget("org.kde.plasma.systemloadviewer");
systemLoad.currentConfigGroup = ["General"];
systemLoad.writeConfig("monitorType", "Compact Bar");

panel.addWidget("org.kde.plasma.pager");

