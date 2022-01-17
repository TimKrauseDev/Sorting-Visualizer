# Sorting Visualizer

View the live version [HERE](https://krause-sorting-visualizer.web.app/).



## Overview

This sorting visualizer is a front-end application that allows users to visualize the following sorting algorithms: Bubble, Insertion, Merge, Quick and Selection. You have the ability to sort the array of bars automatically or step-by-step. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and deployed to [Firebase](https://firebase.google.com/). Below you can find the technology used, layout of the directories and most importantly, where to go to see the live version.

## View Live Site:
View the live version [Here](https://krause-sorting-visualizer.web.app/).


## Technology Used:
- React
- SCSS

## Directory 
###### Starting at SRC not the root

.<br />
├── index.js <br />
├── components<br />
 &nbsp;&nbsp;&nbsp;  ├── App.js<br />
 &nbsp;&nbsp;&nbsp;  ├── Controls.js<br />
 &nbsp;&nbsp;&nbsp;  ├── LandingPage.js<br />
 &nbsp;&nbsp;&nbsp;  ├── Navigation.js<br />
 &nbsp;&nbsp;&nbsp;  └── sort<br />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     ├── BubbleSort.js<br />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     ├── InserrtionSort.js<br />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     ├── MergeSort.js<br />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     ├── QuickSort.js<br />
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     └── SelectionSort.js<br />
├── helperFunctions<br />
  &nbsp;&nbsp;&nbsp; ├── index.js<br />
  &nbsp;&nbsp;&nbsp; ├── bubbleHelper.js<br />
  &nbsp;&nbsp;&nbsp; ├── insertionHelper.js<br />
  &nbsp;&nbsp;&nbsp; ├── mergeHelper.js<br />
  &nbsp;&nbsp;&nbsp; ├── quickHelper.js<br />
  &nbsp;&nbsp;&nbsp; └── selectionHelper.js<br />
└── scss<br />
  &nbsp;&nbsp;&nbsp; └── custom.scss<br />
    