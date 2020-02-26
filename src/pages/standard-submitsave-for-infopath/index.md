---
title: Standard Submit/Save for Infopath
date: 2009-10-05
---

Last week I was asked to update the submit option on 5 of my old Infopath forms. Originally these forms just used the built in Save button on the toolbar. I was asked to give the user a menu to choose their hospital, and then submit the document to a matching folder. I'd done something…

<!-- end -->

Last week I was asked to update the submit option on 5 of my old Infopath forms.  Originally these forms just used the built in Save button on the toolbar.  I was asked to give the user a menu to choose their hospital, and then submit the document to a matching folder.

I'd done something similar on another form recently, so I decided to adapt that code, and make it generic enough that I could use the resulting code for all 5 updates. What I've come up with is something that I plan to use as the basis of all my future forms.

Here's what you need to do if you want to try it:  

1) Create a Submit connection with the default name of "Main submit".  

2) Create a Web Reference called ProfileService that points to /_vti_bin/UserProfileService.asmx on your server, ie [http://myserver/_vti_bin/UserProfileService.asmx](http://myserver/_vti_bin/UserProfileService.asmx)  

3) Create a reference to Microsoft.Sharepoint.DLL.

Your form will need the following:  

1) FileName field: Used to hold the file name once the form is submitted, ie file – 01-01-2001.xsn. The file name is built using the Name field + the current date. If there are duplicates, we add +1 to the name, ie file-2 – 01-01-2001.xsn.  

2) Name field: This can be any text field, and is used to generate the file name. It should be a field that is likely to be unique, but we do check for duplicate filenames, so it doesn't have to be absolutely unique.

3) [Optional] Log field: Used to log changes to the form. My example form logs Creation, Submission, and Saves.

4) [Optional] Errors field: Used to hold any errors that pop up. This example form just logs the error. In most of my real forms, when I encounter an error, I switch to a special Error view where I show the user what went wrong, and give them a button to report the error to our help desk.  

5) [Optional] FolderChoices field: Used to build the list of available folders. (This needs to be a repeating field)  

6) [Optional] SelectedFolder field: Grabs the name of the folder that the user has selected. (This should be a drop-down menu which gets its values from the FolderChoices field)

Your form will need a Save button. Have that button call StartSaveSubmitForm(). The code will figure out whether the document has already been saved, and either generate a new file name and submit, or save to the existing document.

If you want to submit to a folder, use the Loading event below to populate your FolderChoices field with all the folders that exist in your Form Library.

You'll need to disable the Save button if your required fields are still blank. You'll also want to disable the Name and Folder fields once the document has been submitted to avoid confusion. (The filename is only generated the first time you save the document, so changing the Folder field will not save the doc to a new folder, and changing the Name field will not rename the document.)

If you don't want to submit to a folder, set SubmitToFolder to False.  
 If you don't want to use logging, comment out the references.  
 If you don't want to use error logging, comment out the references.

Here is the code from a stripped down form using this option.

```c
using Microsoft.Office.InfoPath;  
using System;  
using System.Windows.Forms;  
 using System.Xml;  
using System.Xml.XPath;  
using mshtml;  
using Microsoft.SharePoint;  
using System.Collections;

namespace submitcode  
{  
 public partial class FormCode  
 {  
 public void InternalStartup()  
 {  
 EventManager.FormEvents.Loading += new LoadingEventHandler(FormEvents_Loading);  
 ((ButtonEvent)EventManager.ControlEvents["Save_Button"]).Clicked += new ClickedEventHandler(Save_Button_Clicked);  
 }

 public void FormEvents_Loading(object sender, LoadingEventArgs e)  
 {  
 //////////////////////////////////////////////////////////////////////////////  
 //Set the Load variables for this Form  
 //////////////////////////////////////////////////////////////////////////////

 string fileName = "/my:myFields/my:FileName";  
 string libraryName = "Library"; //Name of the form Library we're submitting to  
 string folderChoicesFieldXPath = "/my:myFields/my:FolderChoices"; //XPath for the repeating field that will hold our folder choices
 bool submitToFolder = true;//If you don't want to use folders, change this to false

 //////////////////////////////////////////////////////////////////////////////  

 //Check to see if the filename has been set  
 XPathNavigator xPathNav = MainDataSource.CreateNavigator();  
 XPathNavigator fileNameField = xPathNav.SelectSingleNode(fileName, NamespaceManager);

 if (fileNameField.Value.ToString() == "")//Doc hasn't been saved yet  
 {  
 LogComment("Document created.");  
 if (submitToFolder)//If we are submitting to a folder, build the list of folder names  
 {  
 GetSubFolders(libraryName, folderChoicesFieldXPath);  
 }  
 }  
 }

 public void Save_Button_Clicked(object sender, ClickedEventArgs e)  
 {  
 StartSaveSubmitForm();  
 }  

 private void StartSaveSubmitForm()  
 {  
 //////////////////////////////////////////////////////////////////////////////  
 //Set the Submit variables for this Form  
 //////////////////////////////////////////////////////////////////////////////

 string folderXPath = "/my:myFields/my:FolderPicker";//If you are submitting to a folder point to list, otherwise leave blank  
 string fileNameXPath = "/my:myFields/my:FileName";//The filename field used to set your form's name, IE: test – 01-01-2009.xsn
 string nameXPath = "/my:myFields/my:NameField"; //The field used to generate the first part of the filename. The current date will be post-pended
 string libraryName = "Library"; //Name of the Form Library  
 bool submitToFolder = true;//If you don't want to use folders, change this to false

 ///////////////////////////////////////////////////////////////////////////////  

 //Call Submit or Save method depending on whether the document has been saved  
 XPathNavigator xPathNav = MainDataSource.CreateNavigator();  
 XPathNavigator fileNameField = xPathNav.SelectSingleNode(fileNameXPath, NamespaceManager);

 if (fileNameField.Value.ToString() == "")//Document hasn't been saved yet, so submit it  
 {  
 SubmitForm(folderXPath, fileNameXPath, nameXPath, libraryName, submitToFolder);  
 }  
 else //document has already been submitted, save changes  
 {  
 SaveForm(folderXPath, fileNameXPath, nameXPath, libraryName, submitToFolder);  
 }

 }

 private void LogComment(string comment)  
 {  
 //////////////////////////////////////////////////////////////////////////////  
 //Set the Log variables for this Form  
 //////////////////////////////////////////////////////////////////////////////

 string logXPath = "/my:myFields/my:Log";

 //////////////////////////////////////////////////////////////////////////////  

 XPathNavigator xPathNav = MainDataSource.CreateNavigator();  
 XPathNavigator logField = xPathNav.SelectSingleNode(logXPath, NamespaceManager);

 string log = logField.Value.ToString();

 string newEntry = DateTime.Now.ToString() + " – " + FindCurrentUser() + " – " + comment + "nn" + log;  
 logField.SetValue(newEntry);  
 }

 private void ReportError(string errorMessage, string fullError)  
 {  
 //////////////////////////////////////////////////////////////////////////////  
 //Set the Error Logging variables for this Form  
 //////////////////////////////////////////////////////////////////////////////

 string errorXPath = "/my:myFields/my:ErrorMessage";

 //////////////////////////////////////////////////////////////////////////////

 XPathNavigator xPathNav = MainDataSource.CreateNavigator();  
 XPathNavigator errorMessageField = xPathNav.SelectSingleNode(errorXPath, NamespaceManager);

 LogComment("Encountered error on form.");  
 errorMessageField.SetValue(errorMessage + "n" + fullError);  
 }

 private string FindCurrentUser()  
 {  
 try  
 {  
 //Use Web Service to return information about the current user  
 ProfileService.UserProfileService profileService = new ProfileService.UserProfileService();  
 profileService.UseDefaultCredentials = true;  
 profileService.Url = SPContext.Current.Site.Url.ToString() + "/_vti_bin/UserProfileService.asmx";  
 ProfileService.PropertyData[] userProps = null;  
 try  
 {  
 // Passing null to this method causes the profile of the current user to be returned.  
 userProps = profileService.GetUserProfileByName(null);  
 }  
 catch (Exception ex)  
 {  
 string errormessage = "Unable to get current user profile.";  
 ReportError(errormessage, ex.Message.ToString());  
 }  
 ProfileService.ValueData[] values = userProps[4].Values;//4th item is Preferred Name  
 if (values.Length > 0)  
 {  
 return values[0].Value.ToString();  
 }  
 else  
 {  
 return this.Application.User.UserName.ToString();  
 }  
 }  
 catch (Exception ex)  
 {  
 string errorMessage = "Error finding Preferred Name for current user.";  
 ReportError(errorMessage, ex.Message.ToString());  
 return this.Application.User.UserName.ToString();//Default to returning username  
 }  
 }

 private void SaveForm(string folderXPath, string fileNameXPath, string nameXPath, string libraryName, bool submitToFolder)  
 {  
 try  
 {  
 XPathNavigator xPathNav = MainDataSource.CreateNavigator();  
 XPathNavigator folderField = xPathNav.SelectSingleNode(folderXPath, NamespaceManager);

 FileSubmitConnection fs = (FileSubmitConnection)this.DataConnections["Main submit"];

 //Check to see if Submit location ends with a /, if not, add one.  
 if (fs.FolderUrl.EndsWith("/"))  
 { } //All clear  
 else  
 {  
 fs.FolderUrl = fs.FolderUrl.ToString() + "/";  
 }

 if (fs.FolderUrl.Contains(folderField.Value.ToString()))//Sets right folder when saving immediately after submit  
 {  
 }  
 else  
 {  
 if (submitToFolder)//If we are submitting to a folder, and the data conn isn't pointed to it yet, do so now  
 {  
 fs.FolderUrl = fs.FolderUrl.ToString() + folderField.Value.ToString() + '/';  
 }  
 }

 LogComment("Saved the document.");

 fs.Execute();  
 }  
 catch (Exception ex)  
 {  
 string errorMessage = "Error when saving existing document.";  
 ReportError(errorMessage, ex.Message.ToString());  
 }

 }

 private void SubmitForm(string folderXPath, string fileNameXPath, string nameXPath, string libraryName, bool submitToFolder)  
 {  
 try  
 {  
 XPathNavigator xPathNav = MainDataSource.CreateNavigator();  
 XPathNavigator folderField = xPathNav.SelectSingleNode(folderXPath, NamespaceManager);

 FileSubmitConnection fs = (FileSubmitConnection)this.DataConnections["Main submit"];

 //Check to see if Submit location ends with a /, if not, add one.  
 if (fs.FolderUrl.EndsWith("/"))  
 { } //All clear  
 else  
 {  
 fs.FolderUrl = fs.FolderUrl.ToString() + "/";  
 }

 if (submitToFolder)//If we want to submit to a subfoler, set that folder now  
 { fs.FolderUrl = fs.FolderUrl.ToString() + folderField.Value.ToString() + '/'; }

 //Generate a unique filename for our document  
 string fileName = SetFileName(fileNameXPath, libraryName, nameXPath);  
 LogComment("Submitted document as " + fs.FolderUrl.ToString() + fileName);

 //Submit the document  
 fs.Execute();  
 }  
 catch (Exception ex)  
 {  
 string errorMessage = "Error when trying to submit new document.";  
 ReportError(errorMessage, ex.Message.ToString());  
 }  
 }

 private string SetFileName(string fileNameXPath, string libraryName, string nameXPath)  
 {  
 XPathNavigator xPathNav = MainDataSource.CreateNavigator();  
 XPathNavigator fileNameField = xPathNav.SelectSingleNode(fileNameXPath, NamespaceManager);  
 XPathNavigator nameField = xPathNav.SelectSingleNode(nameXPath, NamespaceManager);

 //Create a filename based on the Name Field and Today's Date  
 string fileName = nameField.Value.ToString() + " – " + DateTime.Today.ToShortDateString();  
 fileName = fileName.Replace('/', '-');

 //Check to see if a file with the same name already exists  
 bool isDuplicate = CheckForDuplicateFileName(fileName, libraryName);

 int x = 2;//If we have a duplicate, we'll add -X to the filename, starting with 2  
 while (isDuplicate)//Keep generating filename + X until we get a unique name  
 {  
 fileName = GenerateNewFileName(nameField.Value.ToString(), Convert.ToString(x));  
 isDuplicate = CheckForDuplicateFileName(fileName, libraryName);  
 x++;  
 }

 //Set File Name Field to our new File Name  
 fileNameField.SetValue(fileName);  

 //Return our filename  
 return fileName;  
 }

 private string GenerateNewFileName(string nameFieldValue, string x)  
 {  
 string newFileName = nameFieldValue + "-" + x + " – " + DateTime.Today.ToShortDateString();  
 newFileName = newFileName.Replace('/', '-');  
 return newFileName;  
 }

 private bool CheckForDuplicateFileName(string fileName, string libraryName)  
 {  
 bool foundduplicate = true;//Return value has to be created and returned outside the elevated security

 //Elevated security sites can't be opened with SPContext, open the site normally and get the GUID  
 //Then open the site again with elevated privelages  
 Guid siteGuid = new Guid();  
 Guid webGuid = new Guid();  
 using (SPSite getGuidSite = SPContext.Current.Site)  
 {  
 using (SPWeb getGuidWeb = getGuidSite.OpenWeb())  
 {  
 siteGuid = getGuidSite.ID;  
 webGuid = getGuidWeb.ID;  
 }  
 }

 SPSecurity.RunWithElevatedPrivileges(delegate()//Run with elevated privelages so we can find docs even if the current user doesn't have access  
 {  
 using (SPSite mySite = new SPSite(siteGuid))  
 {  
 using (SPWeb myWeb = mySite.OpenWeb(webGuid))  
 {  
 SPList requestList = myWeb.Lists[libraryName];  
 SPQuery query = new SPQuery();  
 query.Query = "<Where><Eq><FieldRef Name='Title' /><Value Type='Text'>" + fileName + ".xml</Value></Eq></Where>";  
 query.ViewAttributes = "Scope="Recursive"";//Search subfolders too  
 SPListItemCollection listItemColl = requestList.GetItems(query);  
 if (listItemColl.Count == 0)  
 {  
 foundduplicate = false;//No duplicates found  
 }  
 else  
 {  
 foundduplicate = true;//Found duplicate, we'll need to create a new filename  
 }  
 }  
 }  
 });

 return foundduplicate;  
 }

 private void GetSubFolders(string libraryName, string folderChoicesFieldXPath)  
 {  
 ArrayList folderArray = GrabFolderList(libraryName);//Get a list of the folders  
 PopulateFolders(folderArray, folderChoicesFieldXPath);//Use the folder list to populate our repeating field  
 }

 private void PopulateFolders(ArrayList folderArray, string folderChoicesFieldXPath)  
 {  
 try  
 {  
 //Attach to repeating field facility list  
 XPathNavigator xPathNav = MainDataSource.CreateNavigator();  
 XPathNavigator Loc = xPathNav.SelectSingleNode(folderChoicesFieldXPath, this.NamespaceManager);  
 Loc.SetValue("");  
 XPathNavigator templateNode = Loc.Clone();

 //Loop through all facilities and add them to the repeating field  
 for (int r = 0; r < folderArray.Count; r++)  
 {  
 string value = folderArray[r].ToString();  
 XPathNavigator newNode = templateNode.Clone();  
 newNode.SetValue(value);  
 Loc.InsertBefore(newNode);  
 }  
 Loc.DeleteSelf();//Delete close used to populate list  
 }  
 catch (Exception ex)  
 {  
 string errorMessage = "Error when trying to populate folder List.";  
 ReportError(errorMessage, ex.Message.ToString());  
 }  
 }

 private ArrayList GrabFolderList(string libraryName)  
 {  
 try  
 {  
 ArrayList folderArray = new ArrayList();  
 using (SPSite mySite = SPContext.Current.Site)  
 {  
 using (SPWeb myWeb = mySite.OpenWeb())  
 {  
 SPFolderCollection folders = myWeb.GetFolder(libraryName).SubFolders;  
 foreach (SPFolder currentFolder in folders)  
 {  
 if (currentFolder.Name.ToString() != "Forms")//Grab every folder name except for Forms  
 {  
 folderArray.Add(currentFolder.Name.ToString());  
 }  
 }

 }  
 }  
 return folderArray;  
 }  
 catch (Exception ex)  
 {  
 string errorMessage = "Error when trying to get sub folders from Library.";  
 ReportError(errorMessage, ex.Message.ToString());  
 ArrayList emptyArray = new ArrayList();  
 return emptyArray;  
 }  
 }

 }  
}
```
