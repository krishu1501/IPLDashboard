package com.ipldashboard.data;

import com.ipldashboard.model.Team;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobExecutionListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Component
@Transactional
public class JobCompletionNotificationListener implements JobExecutionListener {

    private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

    private final EntityManager em;

    @Autowired
    public JobCompletionNotificationListener(EntityManager em) {
        this.em = em;
    }

    @Override
    public void afterJob(JobExecution jobExecution) {
        if (jobExecution.getStatus() == BatchStatus.COMPLETED) {
            Map<String, Team> teamMap = new HashMap<>();
            //extracting team names from team1 and team2 fields
            List<Object[]> resultList = em.createQuery("select m.team1, count(*) from Match m group by m.team1").getResultList();
            resultList.stream().map(res -> new Team((String) res[0], (long) res[1])).forEach(team -> teamMap.put(team.getTeamName(), team));
            em.createQuery("select m.team2, count(*) from Match m group by m.team2", Object[].class).getResultList().stream().forEach(res ->
                    teamMap.compute((String) res[0], (k, team) -> {
                        if (team == null)
                            return new Team((String) res[0], (long) res[1]);
                        else {
                            team.setTotalMatches(team.getTotalMatches() + (long) res[1]);
                            return team;
                        }
                    }));
            em.createQuery("select m.matchWinner, count(*) from Match m group by m.matchWinner", Object[].class)
                    .getResultList()
                    .forEach(res -> teamMap.computeIfPresent((String) res[0], (k, team) -> {
                        team.setTotalWins((long)res[1]);
                        return team;
                    }));
            teamMap.values().forEach(team -> em.persist(team));
        }
    }
}