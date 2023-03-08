package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Library;
import com.example.demo.Service.LibService;

@CrossOrigin
@RestController
public class LibController {
	
	@Autowired
	private LibService lServ;
	
	@GetMapping("/books")
	public List<Library> getLib(){
		return lServ.getLib();
	}
	
	@PostMapping("/Add")
	public Library addBook(@RequestBody Library lib) {
		return lServ.addBook(lib);
	}
	
	@PutMapping("/update/{Bk_Id}")
	public Library update(@PathVariable long Bk_Id,@RequestBody Library lib) {
		return lServ.update(Bk_Id,lib);
	}
	
	@DeleteMapping("/delete/{Bk_Id}")
	public void delete(@PathVariable long Bk_Id) {
		lServ.delete(Bk_Id);
	}
}
