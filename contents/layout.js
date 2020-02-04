/*
 *
 * Copyright (C) 2015-2016 Radosław Wicik <radoslaw@wicik.pl>
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/
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
panel.height = 55;
panel.width = 55;

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
systemLoad.writeConfig("cpuAllActivated", "true");

panel.addWidget("org.kde.plasma.pager");

