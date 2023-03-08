package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Library;
import com.example.demo.Repository.LibRepo;

@Service
public class LibService {
	
	@Autowired
	private LibRepo lRepo;
	
	public List<Library> getLib(){
		List<Library> arr = new ArrayList<>();
		arr = (List<Library>)lRepo.findAll();
		return arr;
	}
	
	public Library addBook(Library lib) {
		return lRepo.save(lib);
	}
	
	public void delete(long Bk_Id) {
		lRepo.deleteById(Bk_Id);
	}
	
	public Library update(long Bk_Id,Library lib) {
		return lRepo.saveAndFlush(lib);
	}
	
}
