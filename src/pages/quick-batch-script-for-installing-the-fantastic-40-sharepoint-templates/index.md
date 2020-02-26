---
title: Quick Batch Script for installing the “Fantastic 40” Sharepoint Templates
date: 2008-04-23
---

After rebuilding the Dev Server, one of my first tasks was re-installing the Fantastic 40 templates that Microsoft gives away.  Half of these templates are .STP files which need to be added to a Site Collection via the GUI.  The other 20 are .WSP files, and need to be added via the command line. You…


<!-- end -->


<div>After rebuilding the Dev Server, one of my first tasks was re-installing  the Fantastic 40 templates that Microsoft gives away.  Half of these  templates are .STP files which need to be added to a Site Collection via the  GUI.  The other 20 are .WSP files, and need to be added via the command  line.</div>
<div>You can download the templates from here: [http://www.microsoft.com/downloads/details.aspx?FamilyID=5807b5ef-57a1-47cb-8666-78c1363f127d&DisplayLang=en](http://www.microsoft.com/downloads/details.aspx?FamilyID=5807b5ef-57a1-47cb-8666-78c1363f127d&DisplayLang=en)

All the .WSP templates rely on a template called the ApplicationTemplateCore.  There are 3 steps to installing this file:  
stsadm –o addsolution –filename ApplicationTemplateCore.wsp  
stsadm –o deploysolution –name ApplicationTemplateCore.wsp -allowgacdeployment -immediate  
 stsadm -o copyappbincontent

</div>
<div>Once you've gotten the Application Core installed, the rest of the .WSP  templates are installed via the same 2 command lines.  The last time I did this,  I was smart enough to create a batch file to install them all for me.</div>
<div> </div>
<div>Here's that batch file:</div>
<div> </div>
<div>stsadm -o addsolution -filename AbsenceVacationSchedule.wsp  
stsadm -o  deploysolution -name AbsenceVacationSchedule.wsp -allowgacdeployment  -immediate</div>
<div>stsadm -o addsolution -filename  BudgetingTrackingMultipleProjects.wsp  
stsadm -o deploysolution -name  BudgetingTrackingMultipleProjects.wsp -allowgacdeployment -immediate</div>
<div>stsadm -o addsolution -filename BugDatabase.wsp  
stsadm -o deploysolution  -name BugDatabase.wsp -allowgacdeployment -immediate</div>
<div>stsadm -o addsolution -filename CallCenter.wsp  
stsadm -o deploysolution  -name CallCenter.wsp -allowgacdeployment -immediate</div>
<div>stsadm -o addsolution -filename ChangeRequest.wsp  
stsadm -o  deploysolution -name ChangeRequest.wsp -allowgacdeployment -immediate</div>
<div>stsadm -o addsolution -filename ComplianceProcessSupport.wsp  
stsadm -o  deploysolution -name ComplianceProcessSupport.wsp -allowgacdeployment  -immediate</div>
<div>stsadm -o addsolution -filename ContactsManagement.wsp  
stsadm -o  deploysolution -name ContactsManagement.wsp -allowgacdeployment -immediate</div>
<div>stsadm -o addsolution -filename DocumentLibraryReview.wsp  
stsadm -o  deploysolution -name DocumentLibraryReview.wsp -allowgacdeployment  -immediate</div>
<div>stsadm -o addsolution -filename EventPlanning.wsp  
stsadm -o  deploysolution -name EventPlanning.wsp -allowgacdeployment -immediate</div>
<div>stsadm -o addsolution -filename ExpenseReimbursementApproval.wsp  
stsadm  -o deploysolution -name ExpenseReimbursementApproval.wsp -allowgacdeployment  -immediate</div>
<div>stsadm -o addsolution -filename HelpDesk.wsp  
stsadm -o deploysolution  -name HelpDesk.wsp -allowgacdeployment -immediate</div>
<div>stsadm -o addsolution -filename InventoryTracking.wsp  
stsadm -o  deploysolution -name InventoryTracking.wsp -allowgacdeployment -immediate</div>
<div>stsadm -o addsolution -filename ITTeamWorkspace.wsp  
stsadm -o  deploysolution -name ITTeamWorkspace.wsp -allowgacdeployment -immediate</div>
<div>stsadm -o addsolution -filename JobRequisition.wsp  
stsadm -o  deploysolution -name JobRequisition.wsp -allowgacdeployment -immediate</div>
<div>stsadm -o addsolution -filename KnowledgeBase.wsp  
stsadm -o  deploysolution -name KnowledgeBase.wsp -allowgacdeployment -immediate</div>
<div>stsadm -o addsolution -filename LendingLibrary.wsp  
stsadm -o  deploysolution -name LendingLibrary.wsp -allowgacdeployment -immediate</div>
<div>stsadm -o addsolution -filename PhysicalAssetTracking.wsp  
stsadm -o  deploysolution -name PhysicalAssetTracking.wsp -allowgacdeployment  -immediate</div>
<div>stsadm -o addsolution -filename ProjectTrackingWorkspace.wsp  
stsadm -o  deploysolution -name ProjectTrackingWorkspace.wsp -allowgacdeployment  -immediate</div>
<div>stsadm -o addsolution -filename RoomEquipmentReservations.wsp  
stsadm -o  deploysolution -name RoomEquipmentReservations.wsp -allowgacdeployment  -immediate</div>
<div>stsadm -o addsolution -filename SalesLeadPipeline.wsp  
stsadm -o  deploysolution -name SalesLeadPipeline.wsp -allowgacdeployment -immediate</div>

