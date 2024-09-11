
package com.example.test.test;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {

    @GetMapping("/")
    public String test() {
        return "ajaxTest";
    }

    @PostMapping("/json")
    @ResponseBody
    public List<TestDTO> getJson(@RequestParam("today") String today, @RequestParam("human") String human) {
        System.out.println(today + "!!!1");
        System.out.println(human + "!!!2");
        ArrayList<TestDTO> al = new ArrayList<>();
        TestDTO td = new TestDTO();
        td.setId("asdf");
        td.setTestNum(1);
        al.add(td);
        TestDTO td1 = new TestDTO();
        td1.setId("asdfsdf");
        td1.setTestNum(2);
        al.add(td1);
        return al;
    }
}
