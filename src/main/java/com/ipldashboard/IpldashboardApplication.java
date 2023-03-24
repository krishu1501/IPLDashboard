package com.ipldashboard;

import com.ipldashboard.data.JobCompletionNotificationListener;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersInvalidException;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class IpldashboardApplication {

	public static void main(String[] args) throws JobExecutionAlreadyRunningException, JobRestartException, JobInstanceAlreadyCompleteException, JobParametersInvalidException {
		ConfigurableApplicationContext context = SpringApplication.run(IpldashboardApplication.class, args);

//		Job job = context.getBean(Job.class);
//		JobRepository jobRepository = context.getBean(JobRepository.class);
//		System.out.println(job.getName());
//		jobRepository.createJobExecution(job.getName(), new JobParameters());
//		JobLauncher jobLauncher = context.getBean(JobLauncher.class);
//		jobLauncher.run(job,new JobParameters());
	}
}
