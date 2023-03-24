package com.ipldashboard.repository;

import com.ipldashboard.model.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team, Long> {
    public Team getByTeamName(String teamName);
}
