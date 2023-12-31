import * as loginPage from '../support/Base/pages/Login.po';
import { LoginPageData } from '../support/Base/pagedata/LoginPageData';
import * as teamsTasksPage from '../support/Base/pages/TeamsTasks.po';
import { TeamsTasksPageData } from '../support/Base/pagedata/TeamsTasksPageData';
import * as dashboardPage from '../support/Base/pages/Dashboard.po';
import * as organizationProjectsPage from '../support/Base/pages/OrganizationProjects.po';
import { OrganizationProjectsPageData } from '../support/Base/pagedata/OrganizationProjectsPageData';
import { CustomCommands } from '../support/commands';
import * as organizationTagsUserPage from '../support/Base/pages/OrganizationTags.po';
import { OrganizationTagsPageData } from '../support/Base/pagedata/OrganizationTagsPageData';
import * as organizationTeamsPage from '../support/Base/pages/OrganizationTeams.po';
import { OrganizationTeamsPageData } from '../support/Base/pagedata/OrganizationTeamsPageData';

describe('Add teams tasks test', () => {
	before(() => {
		CustomCommands.login(loginPage, LoginPageData, dashboardPage);
	});
	it('Should be able to add new task', () => {
		CustomCommands.addProject(
			organizationProjectsPage,
			OrganizationProjectsPageData
		);
		CustomCommands.addTag(
			organizationTagsUserPage,
			OrganizationTagsPageData
		);
		CustomCommands.addTeam(
			organizationTeamsPage,
			OrganizationTeamsPageData
		);
		cy.visit('/#/pages/tasks/team');
		teamsTasksPage.gridBtnExists();
		teamsTasksPage.gridBtnClick(1);
		teamsTasksPage.addTaskButtonVisible();
		teamsTasksPage.clickAddTaskButton();
		teamsTasksPage.selectProjectDropdownVisible();
		teamsTasksPage.clickSelectProjectDropdown();
		teamsTasksPage.selectProjectOptionDropdown(
			TeamsTasksPageData.defaultTaskProject
		);
		teamsTasksPage.selectStatusDropdownVisible();
		teamsTasksPage.clickStatusDropdown();
		teamsTasksPage.selectStatusFromDropdown(
			TeamsTasksPageData.defaultStatus
		);
		teamsTasksPage.selectTeamDropdownVisible();
		teamsTasksPage.clickSelectTeamDropdown();
		teamsTasksPage.selectTeamDropdownOption(0);
		teamsTasksPage.clickKeyboardButtonByKeyCode(9);
		teamsTasksPage.addTitleInputVisible();
		teamsTasksPage.enterTitleInputData(TeamsTasksPageData.defaultTaskTitle);
		teamsTasksPage.tagsMultiSelectVisible();
		teamsTasksPage.clickTagsMultiSelect();
		teamsTasksPage.selectTagsFromDropdown(0);
		teamsTasksPage.clickCardBody();
		teamsTasksPage.dueDateInputVisible();
		teamsTasksPage.enterDueDateData();
		teamsTasksPage.clickKeyboardButtonByKeyCode(9);
		teamsTasksPage.estimateDaysInputVisible();
		teamsTasksPage.enterEstimateDaysInputData(
			TeamsTasksPageData.defaultTaskEstimateDays
		);
		teamsTasksPage.estimateHoursInputVisible();
		teamsTasksPage.enterEstimateHoursInputData(
			TeamsTasksPageData.defaultTaskEstimateHours
		);
		teamsTasksPage.estimateMinutesInputVisible();
		teamsTasksPage.enterEstimateMinutesInputData(
			TeamsTasksPageData.defaultTaskEstimateMinutes
		);
		teamsTasksPage.taskDescriptionTextareaVisible();
		teamsTasksPage.enterTaskDescriptionTextareaData(
			TeamsTasksPageData.defaultTaskDescription
		);
		teamsTasksPage.saveTaskButtonVisible();
		teamsTasksPage.clickSaveTaskButton();
		teamsTasksPage.waitMessageToHide();
		teamsTasksPage.verifyTaskExists(TeamsTasksPageData.defaultTaskTitle);
	});
	it('Should be able to duplicate task', () => {
		teamsTasksPage.tasksTableVisible();
		teamsTasksPage.selectTasksTableRow(0);
		teamsTasksPage.duplicateOrEditTaskButtonVisible();
		teamsTasksPage.clickDuplicateOrEditTaskButton(0);
		teamsTasksPage.confirmDuplicateOrEditTaskButtonVisible();
		teamsTasksPage.clickConfirmDuplicateOrEditTaskButton();
	});
	it('Should be able to delete task', () => {
		teamsTasksPage.waitMessageToHide();
		teamsTasksPage.tasksTableVisible();
		teamsTasksPage.selectTasksTableRow(0);
		teamsTasksPage.deleteTaskButtonVisible();
		teamsTasksPage.clickDeleteTaskButton();
		teamsTasksPage.confirmDeleteTaskButtonVisible();
		teamsTasksPage.clickConfirmDeleteTaskButton();
	});
	it('Should be able to edit task', () => {
		teamsTasksPage.waitMessageToHide();
		teamsTasksPage.tasksTableVisible();
		teamsTasksPage.selectTasksTableRow(0);
		teamsTasksPage.duplicateOrEditTaskButtonVisible();
		teamsTasksPage.clickDuplicateOrEditTaskButton(1);
		teamsTasksPage.selectProjectDropdownVisible();
		teamsTasksPage.clickSelectProjectDropdown();
		teamsTasksPage.selectProjectOptionDropdown(
			TeamsTasksPageData.defaultTaskProject
		);
		teamsTasksPage.addTitleInputVisible();
		teamsTasksPage.enterTitleInputData(TeamsTasksPageData.editTaskTitle);
		teamsTasksPage.dueDateInputVisible();
		teamsTasksPage.enterDueDateData();
		teamsTasksPage.clickKeyboardButtonByKeyCode(9);
		teamsTasksPage.estimateDaysInputVisible();
		teamsTasksPage.enterEstimateDaysInputData(
			TeamsTasksPageData.defaultTaskEstimateDays
		);
		teamsTasksPage.estimateHoursInputVisible();
		teamsTasksPage.enterEstimateHoursInputData(
			TeamsTasksPageData.defaultTaskEstimateHours
		);
		teamsTasksPage.estimateMinutesInputVisible();
		teamsTasksPage.enterEstimateMinutesInputData(
			TeamsTasksPageData.defaultTaskEstimateMinutes
		);
		teamsTasksPage.taskDescriptionTextareaVisible();
		teamsTasksPage.enterTaskDescriptionTextareaData(
			TeamsTasksPageData.defaultTaskDescription
		);
		teamsTasksPage.saveTaskButtonVisible();
		teamsTasksPage.clickSaveTaskButton();
		teamsTasksPage.waitMessageToHide();
		teamsTasksPage.verifyTaskExists(TeamsTasksPageData.editTaskTitle);
	});
	it('Should be able to delete task', () => {
		teamsTasksPage.waitMessageToHide();
		teamsTasksPage.tasksTableVisible();
		teamsTasksPage.selectTasksTableRow(0);
		teamsTasksPage.deleteTaskButtonVisible();
		teamsTasksPage.clickDeleteTaskButton();
		teamsTasksPage.confirmDeleteTaskButtonVisible();
		teamsTasksPage.clickConfirmDeleteTaskButton();
		teamsTasksPage.waitMessageToHide();
		teamsTasksPage.verifyTaskIsDeleted();
	});
});
