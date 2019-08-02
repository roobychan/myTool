SELECT
	CRM,
	UserStory,
	Descrip as US_Descrip,
	IsInOurTeam,
	CreateDate,
	LastUpdate,
	DueDate,
	r.Name as Resp_Name,
	t.Name as Test_Name,
	i.Name as Iter_Name,
	StartDate,
	EndDate,
	d.Name as Dep_Status,
	u.Name as US_Status,
	TAG.Name as isDev,
	isDefect
FROM
	RECORDS as rd
INNER JOIN MEMBER as r ON rd.RespMem = r.UID
INNER JOIN MEMBER as t on rd.TestMem = t.UID
INNER JOIN ITERATION as i on rd.Iteration = i.UID
INNER JOIN DSTAT as d on rd.DeployStatus = d.UID
INNER JOIN USSTAT as u on rd.USStatus = u.UID
INNER JOIN TAG on rd.Tag = TAG.UID;