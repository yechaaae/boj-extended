"use strict";const Config={save:function(a,b,c){return chrome.runtime.lastError?(console.warn(chrome.runtime.lastError.message),void setTimeout(this.save.bind(null,a,b,c),100)):void chrome.runtime.sendMessage({action:"config.save",data:{key:a,value:b}},c)},load:function(a,b){return chrome.runtime.lastError?(console.warn(chrome.runtime.lastError.message),void setTimeout(this.load.bind(null,a,b),100)):void chrome.runtime.sendMessage({action:"config.load",data:{key:a}},b)},remove:function(a,b){return chrome.runtime.lastError?(console.warn(chrome.runtime.lastError.message),void setTimeout(this.save.remove(null,a,b),100)):void chrome.runtime.sendMessage({action:"config.remove",data:{key:a}},b)}};