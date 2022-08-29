import bcrypt from 'bcryptjs';


const users = [
    {
        name: "NhatQuang",
        email: "admin@example.com",
        password:bcrypt.hashSync("123456",10),
        usersDetails:{
            aboutMe : "Studying IT at YersinUni Mỗi buổi chiều đi học về em thường cùng tụi thằng Sơn, thằng Phúc xách chai đi đổ dế. Hôm nào chán tụi em lại rủ nhau đi đánh đáo, đánh khăng. Trong nhà em toàn bi, ảnh, quay, không thể kiếm đâu ra một con búp bê hay một bộ đồ hàng cả. Ba thường vừa cười vừa trêu em “đáng lẽ Bé Còi nhà ta phải là con trai mới đúng”. Thành tích học tập của em rất tốt. Năm ngoái em còn được nhà trường cử đi thi học sinh giỏi môn Toán nữa đấy. Mơ ước lớn nhất của em là được trở thành phi công, lái những chiếc máy bay thật lớn, thật to bay lên bầu trời cao và trong xanh trên kia.",
            skills: ["Photoshop", "HTML/CSS", "Javascript", "ReactJS"],
            education: "Trường Đại học yersin Đà Lạt",
            instagram:"instagram.com/quang",
            facebook:"fb.com/asdzzz",
        },
        workExperiences:
            [
                {
                    workTime: "2014/2016",
                    workPosition: "LEAD TECH",
                    workPlace:"Facebook",
                    detail:"oaisojdioajio",
                },
                {
                    workTime: "2016/2020",
                    workPosition: "LEAD TECH",
                    workPlace:"Youtube"
                },
            ]
          
        ,
        dateOfBirth:"11/02/2002",
        gender:"Nam",
        contactNumber:"01689421205",
        isAdmin :true
    },
   
]
export default users;