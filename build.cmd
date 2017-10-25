@echo off
del /S /F /Q "public\*.js"
del /S /F /Q "public\*.css"
del /S /F /Q "public\*.map"
webpack && node update.js