# 文本API
## 每日一言
### 请求

`GET /text/oneDay`

[点击尝试](https://api.oofo.cc/text/oneDay)
### 参数
- 无
### 成功响应

**Code:** 200 OK

**内容:**
```json
{
  "code": 200,
  "data": "我的悲伤还来不及出发，就已经到站下车。——《第七天》",
  "msg": "Success"
}
```
### 错误响应
**Code:** 500 Error

**内容:**
```json
{
  "code": 500,
  "msg": "无法获取每日一言"
}
```